import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

import { auth, firebase } from '../firebase';

class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      displayName: null,
      error: null
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is signed in.
        var email = authUser.email;
        /*
        var emailVerified = authUser.emailVerified;
        var photoURL = authUser.photoURL;
        var isAnonymous = authUser.isAnonymous;
        var uid = authUser.uid;
        var providerData = authUser.providerData;
        */

        this.setState({
          authUser: authUser,
          displayName: authUser.displayName
        });
      } else {
        this.setState({ authUser: null });
        console.log('Logged out');
      }
    });

    console.log(window.location);

    // if (!this.state.authUser && window.location.pathname !== '/') {
    //   Router.push('/');
    // }
  }

  onLogin = (email, password) => {
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Logged in...');
        Router.push('/dash');
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error.message });
      });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component
          {...pageProps}
          authUser={this.state.authUser}
          onLogin={this.onLogin}
          error={this.state.error}
        />
      </Container>
    );
  }
}

export default MyApp;
