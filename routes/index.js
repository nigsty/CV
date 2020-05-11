const express = require('express');

const fs = require('fs');

const router = express.Router();

module.exports = () => {
  router.get('/:lang?', (request, response, next) => {
    try {
      const lang = request.params.lang;
      let cv;
      if (!lang) {
        const rawdata = fs.readFileSync('./languages/english.json');
        cv = JSON.parse(rawdata);
      } else if (lang) {
        if (lang === 'english') {
          const rawdata = fs.readFileSync('./languages/english.json');
          cv = JSON.parse(rawdata);
        } else if (lang === 'deutsch') {
          const rawdata = fs.readFileSync('./languages/deutsch.json');
          cv = JSON.parse(rawdata);
        } else {
          const rawdata = fs.readFileSync('./languages/english.json');
          cv = JSON.parse(rawdata);
        }
      }

      return response.render('layout', { pageTitle: 'Welcome', template: 'index', cv: cv });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
