const validator = {};

validator.validateUsername = (username) => {
  if (username.length < 3 || username.length > 30) { return "Username must be between 3 and 30 characters long!"; }
  if (username.match(/[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]/)) { return "Username can not contain special characters, except ( underscore and dash)!"; }
  return false;
}

validator.validatePassword = (password) => {
  if (password.length < 8 || password.length > 100) { return "Password must be between 3 and 100 characters long!"; }
  if (!password.match(/\d/)) { return "Password must include at least one number!"; }
  if (!password.match(/[a-z]/)) { return "Password must include at least one small character!"; }
  if (!password.match(/[A-Z]/)) { return "Password must include at least one big character!"; }
  if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) { return "Password must include at least one special character!"; }
  return false;
}

validator.validateEmail = (email) => {
  const emailParts = email.split('@');
  if (email.length < 6 || email.length > 100) { return "Email must be between 6 and 100 characters long!"; }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { return "Email address be this format (TEXT@DOMAIN.END)!"; }
  if (!emailParts[1].length > 5) { return "Email address domain is to short ( at least 5 character like db.de)"; }

  return false;
}

module.exports = validator;