const express = require('express');

const router = express.Router();

function form(req, res) {
  const data = {};
  res.render('form', { data });
}

router.get('/', form);

module.exports = router;
/*
const express = require('express');
const router = express.Router();
function ensureLoggedIn(req, res, next){
  if(reg.isAuthenticated()) {
    return next();
  }
  return res.redirect('/');
}

router.get('/admin', ensureLoggedIn,(req,res) => {
  res.render('notes', {});
});

module.exports = router;
*/