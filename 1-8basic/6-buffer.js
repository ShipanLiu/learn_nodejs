// // utf-8一个汉字是三个字节，英文一个字节 'utf8' 写不写都行
// const buf2 = Buffer.from('Ted','utf8')
// console.log(buf2);

// const bufArr1 = Buffer.from([1, 2, 3])
// console.log(bufArr1);

// const bufOx = Buffer.from([0xe5, 0x87, 0xa0, 0xe6, 0x8a, 0x8a])
// console.log(bufOx.toString()); // 几把

// // 一个变吗另一个也会变
// const bufArr2 = Buffer.from(bufArr1)
// console.log(bufArr1 === bufArr2); // false
// console.log(typeof bufArr1); //object
// console.log(bufArr1[0] === bufArr2[0]); // true


// 分配空间

const buf3 = Buffer.alloc(6)
// 六个字节全部填了1
// buf3.fill(1)
// buf3.fill('几把')
// 开始， 结束（不包括）
// buf3.fill(1,2,5)
// console.log(buf3.slice(0,3));
// console.log(buf3);
// 最后一位为 -1， 往前数， 包括
const a = buf3.fill('几把').slice(-3)
console.log(a.toString());
