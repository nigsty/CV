const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const createError = require('http-errors');

const routes = require('./routes');

const app = express();

const port = 3000;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['Ghkkdi98090', 'hhjjdf89s90998'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'Nigsty ABREHA';

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.use((request, response, next) => {
  return next(createError(404, 'File not found'));
});

app.use((err, request, response, next) =>{
  response.locals.message = err.message;
  const status = err.status || 500;
  response.locals.status = status;
  response.status(status);
  response.render('error');
})

app.listen(port, () => {
  console.log(`Express server listning on port ${port}!`);
});
