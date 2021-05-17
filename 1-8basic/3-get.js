const http  = require('http')
var options = {
  hostname: 'www.baidu.com',
  port: 80,
  method: 'get',
}

let rawData = ''
http.get(options, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk);
  }
  );
})