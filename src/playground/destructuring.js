// 
// Object destructuring
//

// const person = {
//     name: 'David',
//     age: 45,
//     location: {
//         city: 'Ripollet',
//         temp: 18
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {temp: temperature, city} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature}ºC in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName); // Penguin, Self-Published

// 
// Array destructuring
//

// const address = ['Carrer Sant Josep 4A', 'Ripollet', 'Barcelona', '08291'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`);

const items = ['Coffee (iced)', '2€', '2.5€', '2.75€'];
// grab first and third items using array destructuring
const [itemName, , mediumPrice] = items;
console.log(`A medium ${itemName} cost ${mediumPrice}.`);