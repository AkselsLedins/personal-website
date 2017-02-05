var config = {}

config.emailService = 'Gmail';
config.email = process.env.EMAIL;
config.emailPwd = process.env.EMAIL_PASSWORD
config.emailTag = '[aksels.me]';

config.recaptchaSecret = process.env.RECAPTCHA_SECRET;

module.exports = config;
