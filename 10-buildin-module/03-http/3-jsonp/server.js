const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  let urlStr = req.url ///api/data
  let urlObj = url.parse(urlStr,true)
  console.log(urlObj);
  switch(urlObj.pathname) {
    case '/api/data':
      res.write(`${urlObj.query.cb}('this is the right page')`)
      break
    default:
      res.write('page not found')
  }
  res.end()
})

server.listen(8080, () => {
  console.log('listening to  port 8080');
})