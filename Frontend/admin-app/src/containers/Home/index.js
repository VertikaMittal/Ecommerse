import React from 'react';
import Layout from '../../components/Layouts';
import{ Navbar,Nav,NavDropdown, Container,Jumbotron } from 'react-bootstrap';


/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
    <Layout>
       <div style={{margin:"5rem",background:'#fff'}} class="jumbotron text-center">
  <h1>Welcome to Admin Dashboard</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
</div>
    </Layout>
   )

 }
 export default Home