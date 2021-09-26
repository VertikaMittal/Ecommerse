import React from "react";
import Layout from "../../components/Layouts";
import Input from '../../components/UI/Input';
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
  return (
    <Layout>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:6,offset:3}}>
            <Form>
            <Input 
                  label="Email"
                  placeholder="Email"
                  value=""
                  type="email"
                  onChange={()=>{}}
                />
            <Input 
                  label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                  onChange={()=>{}}
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
