var express = require('express');
var router = express.Router();


const log4js = require("log4js");

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = log4js.getLogger("cheese");
logger.level = 'debug'



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 模拟端口攻击,针对 post请求的用户
router.post('/data', (req, res, next) => {
  logger.debug(req.body)
  res.send('ok')
})




module.exports = router;
