const log4js = require("log4js");

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = log4js.getLogger("cheese");
logger.level = 'debug'

// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");


// usage of url

const url = require('url')
const urlString = 'http://www.baidu.com:443/path/index.html?id-2#tag=3'

// logger.debug(url.parse(urlString))


const urlObj = {
    protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id-2',
  query: 'id-2',
  pathname: '/path/index.html',
  path: '/path/index.html?id-2',
  href: 'http://www.baidu.com:443/path/index.html?id-2#tag=3'
}

// logger.debug(url.format(urlObj))



// resolve方法
//  logger.debug(url.resolve('http://www.abc.com/a', '../')) // 输出不带a， ..返回上一层目录。
//  logger.debug(url.resolve('http://www.abc.com/a', '/b'))
