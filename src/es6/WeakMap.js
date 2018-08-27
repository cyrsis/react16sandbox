const dog1 = {name :"Snickers"};
const dog2 = {name:"Sunny"};


const strong = new Map();
const weak = new WeakMap();

strong.set(dog1,'Snockers is the best')
weak.set(dog2, 'Sunny is the 2nd the best')


strong.forEach((value, key) => console.log({key} ,{value}))
console.log(weak)


