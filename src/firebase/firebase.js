import * as firebase from 'firebase';
import moment from 'moment';

var config = {
    apiKey: "AIzaSyCV9EbETPqC6jjKF0CHuAsixcKJ7aa8iW0",
    authDomain: "expensify-3d671.firebaseapp.com",
    databaseURL: "https://expensify-3d671.firebaseio.com",
    projectId: "expensify-3d671",
    storageBucket: "expensify-3d671.appspot.com",
    messagingSenderId: "914612497024"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });

//         console.log(expenses);
//     });

// const onChangeValue = database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });

//         console.log(expenses);
//     }, (e) => {
//         console.log('Something went wrong', e);
//     });


// database.ref('expenses').push({
//     description: 'Gum',
//     note: 'Strawberry flavour',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('notes/-LSv4tCM0i4zYwJN5_EU').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref('notes').set(notes);
// database.ref('notes/12');

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const {name, job} = snapshot.val();
//     console.log(`${name} is a ${job.title} at ${job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(46);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(47);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'David Sabalete',
//     age: 45,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Edreams'
//     },
//     location: {
//         city: 'Ripollet',
//         country: 'Spain'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/country': 'USA'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed.');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });

// another way to remove data
// database.ref('isSingle').set(null);