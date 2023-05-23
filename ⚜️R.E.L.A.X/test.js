//---------------------xndir1------------------------------
let num = Number(prompt("Enter your number"));
let num1 = Number(prompt("Enter your number1"));
let sum = 0;
for (let i = num; i < num1; i++) {
  if (i % 2) {
    sum += i;
  }
}
console.log(sum);
//---------------------xndir2------------------------------
 num = Number(prompt("Enter your number"));
let factor = 1;
for (let i = 1; i <= num; i++) {
  factor *= i;
}
console.log(factor);
//---------------------xndir3------------------------------
 num = Number(prompt("Enter your number"));
let astichan = Number(prompt("Enter yor number"));
let tiv = 1;
for (let i = 0; i < astichan; i++) {
  tiv *= num;
}
console.log(tiv);
//--------------------xndir4---------------------------------
step = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
   step++;
   console.log(j);
 }
}
console.log(step);
step = 0;
outher: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 30; j++) {
  if (j === 25) {
     break outher;
 }
step++;
 }
}
console.log(step);


//let num = Number(prompt("Enter your number"));
//let n = 1;
//let m = 0;
//let o = 0;
//while (num < 100) {
  //o = n;
  //n += o;
  //m = o;
 // num--;
//}
//console.log(num);








// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("Ok");
// }

// function showCancel() {
//   alert("Cancel");
// }

// ask("hamadzayn eq?", showOk, showCancel);

let arrowl = () => {
  return 5 + 4;
};

let arrow2 = () => alert("ok");

let arrow3 = () => 5 + 4;

console.log(arrowl);

