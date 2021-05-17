const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  let urlStr = req.url ///api/data
  let urlObj = url.parse(urlStr,true)
  console.log(urlObj);
  switch(urlObj.pathname) {
    case '/api/data':
      res.writeHead(200, {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      res.write('{"jiba": true, "data": "hello"}')
      break
    default:
      res.write('page not found')
      break
  }
  res.end()
})

server.listen(8080, () => {
  console.log('listening to  port 8080');
})




// npx http-server -p 9000      启动9000端口服务器   会代替浏览器。 再浏览器上输入 localhost:9000。
// 达到间接 访问  http://localhost:8080/api/data

// 实际开发不会这样写， 会使用工具 ： 通过代理 proxy。   http-proxy-middware