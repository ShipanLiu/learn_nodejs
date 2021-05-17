const http = require('http')
/*

querystring 是类型格式  querystring.stringfy(), 将（）里面的内容转化成name=jiba&age=100。 ()里面的内容是Obj格式或者JSON格式  JSON格式的key 必须是双引号 “ ”
JSON.parse(jsonstring ) :  JSON --->  jsObj
JSON.stringfy(jsObj)   :  JSON <---  jsObj

*/

const querystring = require('querystring')

const jsonData = {
  "name": "Ted",
  "age": 23
}

const jsObj = {
  name: "jiba",
  "age": 100
}

// Obj --> query
console.log(querystring.stringify(jsObj));
console.log(querystring.stringify(jsonData));

// jsObj ==> JSON
console.log(JSON.stringify(jsObj))
const jsonStr = JSON.stringify(jsObj)
console.log(JSON.parse(jsonStr))