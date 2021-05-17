const logger = require('../../utlis/logConfig')
const http = require('http')
const querystring = require('querystring')
const https = require('https')

const hostname = '127.0.0.1'
const port = 3000

// const server = http.createServer((request, response) => {
//   // logger.debug(request)
//   // debugger;
//   // 获取 request的url
//   const url = request.url
//    response.statueCode = 200;
//   // response.setHeader('Content-Type', 'text/plain')
//   // response.setHeader('Content-Type', 'text/html')
//   // response.write('hello Ted...')
//   // response.end('{"age": 100}'); 也可以写在end里面
//   response.setHeader('Content-Type', 'application/json;charset=utf-8')

//   response.write(`{"url": "${url}"}`)
//   response.end()
// })


// const server = http.createServer((request, response) => {
//   // data里面是query
//   let data = ''
//   request.on('data', (chunk) => {
//     data += chunk
//   })

//   request.on('end', () => {
//     response.statueCode = 200;
//     response.setHeader('Content-Type', 'application/json;charset=utf-8')
//     response.write(JSON.stringify(querystring.parse(data)))
//     response.end()
//   })


// })


const server = http.createServer((request, response) => {
  // data里面是query
    https.get('https://api2.order.mi.com/product/view?product_id=1191900024&version=2&t=1620997288', (result) => {
      let data = 'jiab+'
      result.on('data', (chunk) => {
        data += chunk

      })

      result.on('end', () => {
        response.statueCode = 200;
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write(data)
        response.end()
      })
    })

})

server.listen(port, hostname, () => {
  console.log('3000port is listening');
})