import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBJ6h7hZjIMUaP_LjVlElmFnAimefFpSgA',
  authDomain: 'catch-of-the-day-8aff0.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-8aff0.firebaseio.com'
};

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
