import * as firebase from 'firebase';

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

database.ref().set({
    name: 'David Sabalete',
    age: 45,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Edreams'
    },
    location: {
        city: 'Ripollet',
        country: 'Spain'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((error) => {
    console.log('This failed.', error);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle',
    'location/country': 'USA'
});

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed.');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });

// another way to remove data
// database.ref('isSingle').set(null);