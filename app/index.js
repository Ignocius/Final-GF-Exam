/*eslint quote-props: ["error", "always"]*/
/*eslint-env es6*/
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

let someObject = {
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
console.log(someObject.part1.array.length);
