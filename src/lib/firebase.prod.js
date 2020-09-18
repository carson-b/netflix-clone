import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: 'AIzaSyC_JjiCh2TsL21owxmJVouvTvBU59tjnoc',
  authDomain: 'netflix-clone-5f741.firebaseapp.com',
  databaseURL: 'https://netflix-clone-5f741.firebaseio.com',
  projectId: 'netflix-clone-5f741',
  storageBucket: 'netflix-clone-5f741.appspot.com',
  messagingSenderId: '933368305794',
  appId: '1:933368305794:web:d5b3b19cfcd41c0eacbc9b',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
