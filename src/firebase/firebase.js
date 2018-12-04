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
    isSingle: false,
    location: {
        city: 'Ripollet',
        country: 'Spain'
    }
});

//database.ref().set('This is my data');

database.ref('age').set(46);
database.ref('location/city').set('Sabadell');

database.ref('attributes').set({
    height: 178,
    weight: 93.5
});

console.log('I made a request to change the data.');