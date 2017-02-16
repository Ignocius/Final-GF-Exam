/* eslint quote-props: ["error", "always"] */
/* eslint-env es6 */
const alma = 'alma';

const fa = (cica) => {
  const gyumolcs = cica + 1;
  console.log(gyumolcs);
};
fa(alma);

function Animal(sound) {
  this.sound = sound;
}

Animal.prototype.say = function (sound) {
  return this.sound;
};

const dog = new Animal('woof');
const cat = new Animal('miau');

console.log(dog.say());
console.log(cat.say());

console.group('------Filter--------');

const data = [1, 2, 3, 4, 5, 6, 1, 78, 86, 8, 10];
console.log(data.filter(function (num) {
  return num > 20;
}));
console.groupEnd('------Filter-END-------');

const someObject = {
  'part1': {
    'name': 'Part 1',
    'size': '20',
    'qty': '50',
    'array': [1, 2, 5, 10, 11],
  },
  'part2': {
    'name': 'Part 2',
    'size': '15',
    'qty': '60',
  },
};
// console.log(someObject.part1.array.length);

// # Create a function that takes a list as a parameter,
// # and returns a new list with every second element from the original list.
// # It should raise an error if the parameter is not a list.
// # Example: with the input [1, 2, 3, 4, 5] it should return [2, 4].

const input = [1, 2, 3, 4, 5];
const arrayMap = function EverySecondElemFromArray(item) {
  const returnedArray = [];
  if (typeof item === 'object') {
    for (let i = 1; i < item.length; i++) {
      if (i % 2 === 0) {
        returnedArray.push(i);
      }
    }
  } else {
    throw Error;
  }
  return returnedArray;
};

const newArr = input.filter((value, index) => {
  return index % 2 === 1;
});

const newInput = input.map((item, index) => {
  console.log(item);
  return (index % 2 === 1) ? item : 'map this';
});

console.log(arrayMap(input));
console.log(newInput);
console.log('yoo', newArr);
arrayMap('asas');
