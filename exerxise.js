let myArr=[2,3,4,7,8,1,1,1,9,10];
let min=Math.min(...myArr);
console.log(min);
let index=myArr.indexOf(min);
console.log(index);
myArr.splice(index,1);
console.log(myArr);