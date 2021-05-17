// const all = require('./name')
// 加上js， 省的查找， 优化速度
// const all = require('./name.js')
// console.log(all);
// 解构
const {name, others} = require('./name')
name.sayName('Ted')
console.log(name);