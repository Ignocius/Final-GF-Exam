const array = [1, 2, 3, 4, 5, 6];

let newArray = array.map((item, index) => {
  return (index % 2 === 1) ? item : 'not even';
});

console.log(newArray);
