import { auth } from '../firebase';
import Router from 'next/router';

const SignOut = () => {
  auth.doSignOut().then((window.location = '/'));
};

export default SignOut;
