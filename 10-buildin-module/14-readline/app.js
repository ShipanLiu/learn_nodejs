// 逐行读入  一次一行地读取可读流

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('how do you like Doener?', (answer) => {
  console.log(`thanskd for your answer: ${answer}`);
  rl.close()
})