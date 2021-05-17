/*

const http = require('http') : http不用yarn， 因为是node自带的。


*/


const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  console.log('我被请求了一次');
  console.log(req instanceof http.IncomingMessage);
  res.statueCode = 200;
  // 相应格式： 纯文本
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('charset', 'utf-8')
  // 相应的数据， 注意这里是res
  res.write('hello Ted...')
  // 告诉浏览器结束
  res.end();
})

// 回调函数作用： 当启动时候就会触发
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
})