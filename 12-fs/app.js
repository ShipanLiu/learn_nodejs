const fs = require('fs')

// 创建文件夹
//第一个参数是 文件名， 第二个参数是错误优先的回调（针对错误）
// fs.mkdir('logs', (err) => {
//   if(err) throw err
//   console.log('file created success!!');
// })

// rename重命名
// fs.rename('./logs', './jiba', () => {
//   console.log('rename done');
// })

// delete file
// fs.rmdir('./jiba', () => {
//   console.log('delete done');
// })

// 读取 文件夹
// fs.readdir('./logs', (err, result) => {
//   console.log(result);
// })

// 写入内容(会覆盖)
// fs.writeFile('./logs/log1.log', 'hello\nworld', (err) => {
//   console.log('done');
// })

// 追加内容
// fs.appendFile('./logs/log1.log', '!!!!!!!!!!jiba', (err) => {
//   console.log('done');
// })

//删除文件
// fs.unlink('./logs/log1.log', (err) => {
//   console.log('done');
// })

//异步读取文件内容 way1
// fs.readFile('./logs/log1.log', 'utf-8', (err, content) => {
//   console.log(content);
// })

//异步读取文件内容 way2
// fs.readFile('./logs/log1.log', (err, content) => {
//   console.log(content.toString());
// })
/*
 同步： 你需要等， 就是读取文件步骤做完之后 才执行接下来的其他代码。
 异步： 可以做其他事情。直接执行接下俩的代码。
*/


/*******************async**********************/
// fs.readFile('./logs/log1.log', (err, content) => {
//   console.log('step one');
//   console.log(content.toString());
// })

// console.log('step two');


/*******************sync**********************/

// const content = fs.readFileSync('./logs/log1.log')
// console.log('step one');
// console.log(content.toString());
// console.log('step two');

// 异步读取文件内容 way3
const fsPromises = require('fs').promises

// ;(async() => {
//   let result = await fsPromises.readFile('./logs/log1.log')
//   console.log(result.toString());
// })()


//或者 用then
// fsPromises.readFile('./logs/log1.log', 'utf-8').then((result) => {
//   console.log(result)
// })



// 循环创建文件
for (var i = 0; i < 10; i++) {
  fs.writeFile(`./logs/log-${i}.log`, `jiba${i}`, (err) => {
    console.log(err);
    console.log('done');
  })
}

//遍历

// function myReadDir(dir) {
//   fs.readdir(dir, (err, content) => {
//     content.forEach((value, index) => {
//       // 拿到文件夹/文件的名称， 进去
//       let joinDir = `${dir}/${value}`
//       // stat最终是为了判断是否是文件夹 还是文件
//       fs.stat(joinDir, (err, stats) => {
//         if(stats.isDirectory()) {
//           // rekursive
//           myReadDir(joinDir)
//         }else {
//           //说明不是folder
//           fs.readFile(joinDir, 'utf-8', (err, content) => {
//             console.log(content);
//           })
//         }
//       })
//     })
//   })
// }

// myReadDir('./')

// watch 监测文件变化

fs.watch('./logs/log-0.log', (err) => {
  console.log('file has changed');
})
