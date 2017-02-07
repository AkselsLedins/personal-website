// server.js
var express     = require('express')
var bodyParser  = require('body-parser')
var expValid    = require('express-validator')
var path        = require('path')
var compression = require('compression')
var nodemailer  = require('nodemailer')
var util        = require('util')
var https       = require('https');
var config      = require('./config')
var sen         = require('./strings/en.js')

var app = express()

app.use(compression());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(expValid([]));

// Helper function to make API call to recatpcha and check response
function verifyRecaptcha(key, callback) {
  console.log('secret is', config.recaptchaSecret);
  https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + config.recaptchaSecret + "&response=" + key, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk.toString();
    });
    res.on('end', function() {
      try {
        var parsedData = JSON.parse(data);
        callback(parsedData.success);
      } catch (e) {
        console.log(e);
        console.log(data);
        callback(false);
      }
    });
  });
}

app.all('/contact', function(req, res, next) {
  console.log('put header');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  next();
});

app.post('/contact', function (req, res) {
  if (req.body.message == undefined ||
    req.body.email   == undefined ||
    req.body.name    == undefined)
    return res.status(422).json({ msg: 'Please fill all the fields' });


  /* validation */
  req.checkBody('name', 'Invalid subject').notEmpty();
  req.checkBody('message', 'Invalid content').notEmpty();
  req.checkBody('email', 'Invalid email').isEmail();

  console.log("SEND Message - Request");
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    service: config.emailService,
    auth: {
      user: config.email,
      pass: config.emailPwd
    }
  });

  var errors = req.validationErrors();
  if (errors) {
    var JSONResponse = {
      msg: 'Validation Errors:',
      errors : util.inspect(errors)
    }
    res.status(422).send(JSON.stringify(JSONResponse));
  }
  /* verify captcha before sending */
  else { verifyRecaptcha(req.body.recaptcha, function(data) {
    if (!data) {
        return res.status(401).json({ msg: sen.err.reCaptcha })
    } else {

      var textToSend = req.body.message + '\n' +
        req.body.email + '\n' +
        req.body.name;

      var mailOptions = {
        from: 'aksels.ledins@gmail.com',
        to: 'aksels.ledins@gmail.com',
        subject: '[Aksels.ME] ' + req.body.name,
        text: textToSend
      };
      transporter.sendMail(mailOptions, function(error, info){
        if ( error ) {
          console.log(error);
          res.status(500).json({ msg: sen.err.sendMsg });
        } else {
          res.status(200).json({ msg: sen.succ.sendMsg });
        };
      });
    }
  });
}

})

app.get('*', function (req, res) {
  res.status(200).json({ msg: '42' });
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
