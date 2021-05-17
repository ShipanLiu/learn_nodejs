const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

function printdata(data) {
  const $ = cheerio.load(data)
  $().each((index, el) => {
    console.log(index);
    console.log($(el).text);
  })
}

const server = http.createServer((req, res) => {
  let data =''
  https.get('https://www.baidu.com', (result) => {
    result.on('data', (chunk) => {
      data += chunk
    })
    result.on('end', () => {
      printdata(data)
    })
  })
  res.write(data)
  res.end()
})

server.listen(8080, () => {
  console.log('8080 is listening');
})