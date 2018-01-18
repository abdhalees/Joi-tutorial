exports.get = (req, res) => {
  res.render('form');
};

exports.post = (req, res) => {
  const { username, password, confirmPassword, age, birthdate, firstLang, availablity } = req.body;
  const usernameRegEx = /"^[a-zA-Z0-9_]*$"/;
  const languages = ['en', 'ar'];
  if (!('username' in req.body)) return res.status(400).render('form', {err: 'username is required'});
  if (!('password' in req.body)) return res.status(400).render('form', {err: 'password is required'});
  if (!('confirmPassword' in req.body)) return res.status(400).render('form', {err: 'confirmPassword is required'});
  if (usernameRegEx.test(username)) {
    return res.status(400).render('form', {err: 'username must be alphanumeric'});
  }
  if (password.length < 4) return res.status(400).render('form', {err: 'password must be more than 4 charchters'});
  if (password !== confirmPassword) return res.status(400).render('form', {err: 'passwords must match'});
  if (!Number.isInteger(parseInt(age))) return res.status(400).render('form', {err: 'age is not a number'});
  if (age < 13) return res.status(400).render('form', {err: 'age must be more than 13'});
  if (!(birthdate instanceof Date)) return res.status(400).render('form', {err: 'birthdate is not a date'});
  if (!languages.includes(firstLang)) return res.status(400).render('form', {err: 'not a valid language'});
  if (availablity !== 'true' && availablity !== 'false') return res.status(400).render('form', {err: 'availbilty is not boolean'});

  res.render('form', {success: 'user added succefully'});
};
