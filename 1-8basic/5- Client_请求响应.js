

/*
总结：

node 中的http模块包含两个部分：
A. http 服务端：
     1. 服务端使用
     2. 请求对象（IncomingMessage对象实例） 和 相应对象（ServerResponse类的实例）
B. http客户端
    1. 客户端的使用（request， get）
    2. 请求对象(ClientRequest类的实例) 和 相应对象(ClientResponse类的实例)

*/







var http = require('http')
var options = {
  hostname: 'www.baidu.com',
  port: 80
}


// http.ClientRequest

var req = http.request(options)

console.log(req instanceof http.ClientRequest);

req.on('response', (res) => {
  res.setEncoding("utf-8")
  res.on('data', (chunk) => {
    // console.log(chunk.toString())
  })

  console.log(res.statusCode);
  console.log(res.httpVersion);
  console.log(res.headers);
  console.log(res.trailers);
})

req.on('error', (err) => {
  console.log(err.message);
})

req.end()

//http.ClientResponse


















/* 比较一下
const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk.toString()}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据');
  });
});
*/