const logger = require('../utlis/logConfig.js')
const querystring = require('querystring')

const query = 'id=2&name=jiba&from=北京'
queryEscape = 'id%3D2%26name%3Djiba%26from%3D%E5%8C%97%E4%BA%AC'
const query2 = 'id:2/name:jiba2/from:南京'
const queryObj = {id: '2', name: 'jibaObj',from:'天津Obj'}

// logger.debug(querystring.parse(query)) //{ id: '2', name: 'jiba', from: '北京' }

// logger.debug(querystring.escape(query))  //id%3D2%26name%3Djiba%26from%3D%E5%8C%97%E4%BA%AC

// logger.debug(querystring.unescape(queryEscape)) //id=2&name=jiba&from=北京

// 错误设置了参数
// logger.debug(querystring.stringify(queryObj, ':', '/')) // id/2:name/jibaObj:from/%E5%A4%A9%E6%B4%A5Obj
// logger.debug(querystring.stringify(queryObj, '/', ':')) // id:2/name:jibaObj/from:%E5%A4%A9%E6%B4%A5Obj
// logger.debug(querystring.parse(query2, '/', ':')) // { id: '2', name: 'jiba2', from: '南京' }
logger.debug(querystring.parse(query2)) //  wrong： { 'id:2/name:jiba2/from:南京': '' }
