import { Navbar, Container, Nav} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';


function NavigationBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
    
    return () => window.removeEventListener("scroll", () => setScrolled(window.scrollY > 50))
}, [])

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });

  const [menuExpandido, setMenuExpandido] = useState(false);

  const toggleMenu = () => {
    setMenuExpandido(!menuExpandido);
  };

  const isExpandedMenuAndSmallScreen = menuExpandido && isSmallScreen

  return (
    <Navbar className={scrolled && "scrolled"} collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu}/>
        <Navbar.Collapse id="responsive-navbar-nav" className={isExpandedMenuAndSmallScreen && "bg-dark"}>
          <Nav className="me-auto">
          <Nav.Link 
              className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } 
              href="#home"
              onClick={() => setActiveLink('home')}
              >
                Home
            </Nav.Link>
            <Nav.Link 
              className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' }
              href="#skills"
              onClick={() => setActiveLink('skills')}
              >
                Sobre
            </Nav.Link>
            <Nav.Link 
              className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' }
              href="#projects"
              onClick={() => setActiveLink('projects')}
              >
                Projetos
            </Nav.Link>
          </Nav>
          <Nav>
          <span className="navbar-text">
            <div className="social-icon">
               <a href="https://github.com/CamilaMandai" rel="noreferrer" target="_blank"><img src={githubLogo} alt="github icon" /></a>
               <a href="https://www.linkedin.com/in/camila-mandai" rel="noreferrer" target="_blank"><img src={linkedinLogo} alt="linkedin icon" /></a>
             </div>
             {!isSmallScreen && (<button><a href='#contact'>Entre em contato</a></button>) }
        </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar className={scrolled && "scrolled"} expand="lg">
    //   <Container>
    //     {/* <Navbar.Brand href="#home">
    //       <span>Camila Mandai</span>
    //     </Navbar.Brand> */}
    //     <Navbar.Toggle aria-controls="basic-navbar-nav">
    //       <span className="navbar-toogle-icon"> </span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link 
    //           className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } 
    //           href="#home"
    //           onClick={() => setActiveLink('home')}
    //           >
    //             Home
    //         </Nav.Link>
    //         <Nav.Link 
    //           className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' }
    //           href="#skills"
    //           onClick={() => setActiveLink('skills')}
    //           >
    //             Sobre
    //         </Nav.Link>
    //         <Nav.Link 
    //           className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' }
    //           href="#projects"
    //           onClick={() => setActiveLink('projects')}
    //           >
    //             Projetos
    //         </Nav.Link>
    //       </Nav>
    //       <span className="navbar-text">
    //         <div className="social-icon">
    //           <a href="https://github.com/CamilaMandai" rel="noreferrer" target="_blank"><img src={githubLogo} alt="github icon" /></a>
    //           <a href="https://www.linkedin.com/in/camila-mandai" rel="noreferrer" target="_blank"><img src={linkedinLogo} alt="linkedin icon" /></a>
    //         </div>
    //         <button className="vvd">Entre em contato</button>
    //       </span>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

NavigationBar.propTypes = {}

export default NavigationBar
