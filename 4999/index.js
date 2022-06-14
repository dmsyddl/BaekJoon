const fs = require('fs');
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 재환 >= 의사 go
// 의사 > 재환 no
let a = input[0]; // 재환
let b = input[1]; // 의사
// if(a.length >= b.length) console.log('go');
// else console.log('no')
let result = a.length >= b.length ? "go" : "no";
console.log(result);