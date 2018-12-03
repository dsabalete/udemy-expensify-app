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

firebase.database().ref().set({
    name: 'David Sabalete'
});