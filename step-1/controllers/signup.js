exports.get = (req, res) => {
  res.render('form');
};

exports.post = (req, res) => {
  console.log(req.body);
  res.render('form', {sucess: 'user added succefully'});
};
