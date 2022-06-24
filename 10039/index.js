const fs = require('fs');
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
let sum = 0;
for(let i = 0; i < input.length; i++) {
    if(input[i] < 40) {
        sum += 40;
    }
    else {
        sum += Number(input[i]);
    }
}
let avg = sum / 5;
console.log(avg);