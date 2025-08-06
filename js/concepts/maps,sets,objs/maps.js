// maps with operations. 


const map = new Map([
  ['name', 'Tareq'],
  [1, 'one'],
  [true, 'boolean key'],
]);
// Add a new key-value pair
map.set('age', 30);

// Update existing key
map.set(1, 'ONE');

console.log('maps',map);


// obj with oerations

const obj = {
  name: 'Tareq',
  1: 'one',
  true: 'boolean key',
};

// Add or update a property
obj.age = 30;
obj['city'] = 'Dhaka';

// You can also use a variable key
const key = 'email';
obj[key] = 'tareq@example.com';
obj.hobbies = ['reading'];
obj.hobbies.push('coding');


console.log('obj', obj);