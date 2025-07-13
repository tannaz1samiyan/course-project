
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css'
import { useState } from 'react';
import { isLogin } from '../../utils';
function MyNavbar(){
    let expand='lg'
   const [loginStatus , setLoginStatus] = useState(isLogin() ? 'خروج' : 'ورود')
  
    const logoutHandler = () => {
    document.cookie = "username=admin; expires=Thu, 01 Jan 2022 00:00:00 UTC; path=/;";
    setLoginStatus('خروج')
  }
   
    
    return(
        <>
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container >
            <Navbar.Brand href="#">نکست وانکد</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to='/' className='nav-link'> صفحه اصلی</NavLink>
                   <NavLink to='/aboute' className='nav-link'> درباره ما</NavLink>
                    <NavLink to='/article' className='nav-link'> مقالات </NavLink>
                     <NavLink to='/panel' className='nav-link'> پنل</NavLink>
                     {
                      isLogin()?
                       <NavLink to='/login' className='nav-link'onClick={logoutHandler} >{loginStatus} 
                      </NavLink>:
                       <NavLink to='/login' className='nav-link'>{loginStatus} 
                      </NavLink>
                 
                     }
                      <NavLink to='/login' className='nav-link'> 
                      </NavLink>
                 
            
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
        </>
    )
  }
export default MyNavbar