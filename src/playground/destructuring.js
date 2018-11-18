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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName); // Penguin, Self-Published