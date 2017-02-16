function delay() {
  console.log('i am delayed :(');
}
// function callMe(){
//   console.log('yooooo');
// }
//
// console.log('I am not delayed');
// setTimeout(delay, 3000);
//
// setInterval(callMe, 3000);

(function() {
  console.log(1);
  (function() {
    console.log(2);
    (function() {
      console.log(3);
      (function() {
        // console.log(4);
        setTimeout(delay, 3000);
        (function() {
          console.log(5);
          (function() {
            console.log(6);
            (function() {
              console.log('last');
            })();
          })();
        })();
      })();
    })();
  })();
})();
