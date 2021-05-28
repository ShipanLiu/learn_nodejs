 const fs = require('fs')
 const zlib = require('zlib')

 const gzip = zlib.createGzip()

// 开始创建流


//相当于 拷贝
// const readStream = fs.createReadStream('./logs.txt')
// const writeStream = fs.createWriteStream('./logs2.txt')
// readStream
//  .pipe(writeStream)

//创建压缩文件
const readStream = fs.createReadStream('./logs.txt')
const writeStream = fs.createWriteStream('./logs.gzip')
readStream
  .pip(gzip)
  .pipe(writeStream)
