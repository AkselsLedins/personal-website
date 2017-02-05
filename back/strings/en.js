var config = require('../config')

/*
** Error strings
*/
var err = {};

err.sendMsg = 'Sorry we couldn\'t send your message, feel free to contact me directly at ' + config.email + '.';
err.sendMsgUE = 'Missing informations';

err.reCaptcha = 'Invalid captcha';
/*
** Info strings
*/
var info = {};

/*
** Success strings
*/
var succ = {};

succ.sendMsg = 'Message sent.';


var en = {
  err  : err,
  info : info,
  succ : succ
}

module.exports = en;
