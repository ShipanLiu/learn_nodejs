// 加密
const crypto = require('crypto')

const password = '1'

const hash = crypto
  //加密方式
  .createHash('sha1') // oder 'md5'
  .update(password)
  .digest('hex')

console.log(hash);