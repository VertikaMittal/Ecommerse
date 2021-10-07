import React,{useState} from "react";
import Layout from "../../components/Layouts";
import Input from '../../components/UI/Input';
import { login } from "../../actions";
import{useDispatch} from 'react-redux';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Jumbotron,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";

/**
 * @author
 * @function Signin
 **/

export const Signin = (props) => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');


  const dispatch = useDispatch();
  const userLogin=(e)=>
  {
    e.preventDefault();
    const user={email, password}
    dispatch(login(user));
  }

  return (
    <Layout>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:6,offset:3}}>
            <Form onSubmit={userLogin}>
            <Input 
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
            <Input 
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Signin;
