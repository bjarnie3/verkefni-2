const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-local');
const users = require('./users');
const xss = require('xss');
var parse = require('pg-connection-string').parse;
var config = parse('postgres://postgres:form@localhost:381/postgres')

const router = express.Router();

async function admin(req, res) {
  
  return res.render('admin');
}

router.get('/', (req, res) => {
  res.render('admin', {admin});
})

 router.post(
     '/', admin
 );

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;