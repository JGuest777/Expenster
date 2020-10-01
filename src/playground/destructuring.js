//! Object Destructuring:

//? Basic Destructuring:
const person = {
  name: 'James',
  age: 31,
  location: {
    city: 'Rockledge',
    temp: 88,
  },
};

const { name, age } = person;
const { city, temp } = person.location;

console.log(
  `Person: ${name} is ${age} and lives in ${city} and its ${temp} degrees.`
);

//? Destructuring gives you the ability to rename a variable:
const personA = {
  nameA: 'James',
  ageA: 31,
  locationA: {
    cityA: 'Rockledge',
    tempA: 88,
  },
};

const { nameA, ageA } = personA;
const { cityA, tempA: temperature } = personA.locationA;

console.log(
  `PersonA: ${nameA} is ${ageA} and lives in ${cityA} and its ${temperature} degrees.`
);

//? Also allows for setting defaults if no value on selected object:
const personB = {
  // name: 'James',
  ageB: 31,
  locationB: {
    cityB: 'Rockledge',
    tempB: 88,
  },
};

const { nameB = 'Anonymous', ageB } = personB;

console.log(`PersonB: Name is ${nameB} and is ${ageB} years old.`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin',
  },
};

const { title, author } = book;
const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

//! Array Destructuring:

const address = ['123', 'Elm st', 'Rockledge', 'FL', 32931];

const [number, street, theCity, state, zip] = address;

console.log(`${number}, ${street}, ${theCity}, ${state},`);

// ? can skip indexes when destructuring & also set default if no value is read within the array.

const address2 = ['321', , 'Rockledge', , 32931];

const [
  number2,
  street2 = 'dunno street',
  ,
  state2 = 'no state!',
  zip2,
] = address2;

console.log(`${number2}, ${street2}, ${state2},`);
