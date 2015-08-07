
var config        = require('./config.js')
  , express       = require('express')
  , http          = require('http')
  , bodyParser    = require('body-parser');
var app = express();

var humansCtrl    = require('./humansCtrl.js')

global.humans = [
    {name:"Bob Morane"}
  , {name:"John Doe"}
  , {name:"Jane Doe"}
];

app
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use('/api/humans', humansCtrl)
  .listen(config.httpPort);

console.log("--------------------- A2 --------------------");
console.log(" Listening on: " + config.httpPort);
console.log("---------------------------------------------");
