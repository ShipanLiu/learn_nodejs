

var fs = require('fs')

// 创建目录
fs.mkdir('./newfile', (err) => {
  if(err) {
    throw err
  }
  console.log('make dir success');
})













// 写入文件

fs.writeFile('./text2.txt', 'jibajibaj', {flag: 'a'}, (err) => { // a:追加写入
  if(err) {
    throw err
  }
  console.log('successfully written.')
  //写入读写测试
  fs.readFile('./text2.txt', 'utf-8', (err, data) => {
    if(err) {
      throw err
    }
    console.log(data)
  })
})
