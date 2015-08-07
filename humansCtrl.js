var express     = require('express')
  , controller  = express.Router();

controller.get('/', function (req, res) {
  return res.status(200).json(global.humans);
});

controller.post('/', function (req, res) {
  global.humans.push(req.body)
  return res.status(201).json(req.body);
});

module.exports = controller;
