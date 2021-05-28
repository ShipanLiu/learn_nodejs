/*
  前端是不能直接访问接口的， 要想访问， 需要再后端设置代理。
  /api   是暗号， 表示要请求API了。   正则 /\/api/

  代理原理： 我访问http://localhost:8080/ajax/.....       通过代理：  将localhost:8080 替换成 lady.vip.com,     http替换成https
  最后： https://lady.vip.com/ajax/...........

  代理 可以解决跨域的本质 ： 就是把url地址改变一下。 http://localhost：8000 --->>>  https：// jiba.com

  这可比 jsonp 和 cors 简单的多。
*/



const http = require('http')
const url = require('url')
const {createProxyMiddleware} = require('http-proxy-middleware')


const server = http.createServer((req, res) => {
  const urlStr = req.url
  // 下面的api是你自己设置瞎几把的暗号， 并不存在再原url里面
  if(/\/api/.test(urlStr)) {
    const proxy = createProxyMiddleware('/api', {
      target: 'https://www.baidu.com',
      changeOrigin: true,
      // 请求的时候带暗号，所以要去掉
      pathRewrite: {
        '^/api': ''
      }

    })
    proxy(req, res)
    console.log('/api is found in url');
  }else {
    console.log('error');
  }
})

server.listen(8080, () => {
  console.log('listening to  port 8080');
})
