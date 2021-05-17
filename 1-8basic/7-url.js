// url就是处理url的格式的

var url = require('url')

// console.log(url);
// var urlObj = url.parse('https://music.youtube.com/watch?v=uDu4fHvcbTU&list=RDAMVMuDu4fHvcbTU')
// console.log(urlObj);
// console.log(urlObj.query);


// const res = url.format({
//   protocol: 'https',
//   host:"127.0.0.1:60",
//   search: 'name=zhangsan'
// })

// console.log(res);


//拼接
const res = url.resolve('http://www.baidu.com', 'a/b?name=zhangsan')
console.log(res);
