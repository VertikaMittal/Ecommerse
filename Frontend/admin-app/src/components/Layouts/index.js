import React from 'react'
import Header from '../Header'
import{ Navbar,Nav,NavDropdown, Container,Jumbotron } from 'react-bootstrap';
/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
    <>
        <Header />
            {props.children}
        
        
    </>
   )

 }
 export default Layout