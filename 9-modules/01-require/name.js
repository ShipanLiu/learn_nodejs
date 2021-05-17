// commonjs规范


const name = {
  surname: 'Liu',
  sayName(a) {
    console.log(this.surname + ' ' + a);
  }
}

const others = {
  age: 23,
  gender: 'male'
}

// 引出去的方法

module.exports = {
  name,   // name: name,
  others  // others: others
}

// 或者
// exports.name = name
// exports.others = others
