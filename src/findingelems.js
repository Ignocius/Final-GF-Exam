const array = [1, 2, 3, 4, 5, 6];
let counter = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] >= 4) {
    counter += 1;
  } if (array[i] === 6) {
    console.log('Yes we have a num six');
  }
}

console.log(counter);
