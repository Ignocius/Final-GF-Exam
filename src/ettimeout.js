function delay() {
  console.log('i am delayed :(');
}
function callMe(){
  console.log('yooooo');
}

console.log('I am not delayed');
setTimeout(delay, 3000);

setInterval(callMe, 3000);
