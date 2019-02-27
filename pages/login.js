import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from '../components/head';
import Navigation from '../components/navigation';

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import '../style/style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillMount = () => {
    if (this.props.authUser) {
      Router.push('/dash');
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.onLogin(email, password);

    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div>
        <Head title="Login" />
        <Navigation />

        <Container>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <Card className="login-card">
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <Button disabled={isInvalid} className="btn-block">
                    Login
                  </Button>
                  {this.props.error}
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
