// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4.
function printAll(...args) {
  //args는 3개의 값이 담겨져있는 배열. 배열 형태로 전달된다.
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // for of 문법
  // for(const arg of args) { //args의 값 하나하나가 arg로 지정되면서 arg값 출력.
  //  console.log(arg);
  // }

  // forEach
  //  args.forEach((arg) => console.log(arg)); //forEach라는 함수형 언어를 이용해서 출력.
}
printAll("dream", "coding", "ellie"); //인자를 3개 전달.
//dream
//coding
//ellie
