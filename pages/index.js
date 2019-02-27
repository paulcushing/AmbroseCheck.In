import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Navigation from '../components/navigation';

import '../style/style.scss';

import { Jumbotron, Container, Row, Col } from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head title="Home" />
        <Navigation authUser={this.props.authUser} />

        <Container>
          <Row>
            <Col>
              <Landing />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const Landing = () => (
  <Jumbotron className="hero">
    <h1 className="title">Welcome to Next!</h1>
    <p className="description">
      To get started, edit <code>pages/index.js</code> and save to reload.
    </p>

    <div className="row">
      <Link href="https://github.com/zeit/next.js#getting-started">
        <a className="card">
          <h3>Getting Started &rarr;</h3>
          <p>Learn more about Next on Github and in their examples</p>
        </a>
      </Link>
      <Link href="https://open.segment.com/create-next-app">
        <a className="card">
          <h3>Examples &rarr;</h3>
          <p>
            Find other example boilerplates on the <code>create-next-app</code>{' '}
            site
          </p>
        </a>
      </Link>
      <Link href="https://github.com/segmentio/create-next-app">
        <a className="card">
          <h3>Create Next App &rarr;</h3>
          <p>Was this tool helpful? Let us know how we can improve it</p>
        </a>
      </Link>
    </div>
  </Jumbotron>
);

export default Home;
