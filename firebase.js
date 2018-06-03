const firebase = require('firebase');
require('firebase/firestore');

import config from './config';

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
});

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);

export { firebase, firestore };
