import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ecommerce from '../assets/ecommerce.png';
import todoapp from '../assets/todoapp.png';
import tangara from '../assets/tangara.png';
import itunes from '../assets/itunesClone.png';
import deliveryApp from '../assets/deliveryApp.png'

export default function Projects() {
  const projects = [
    {
      title:"Ecommerce",
      description: "An Star Wars planets app",
      imgUrl: ecommerce,
      githubLink: '',
    },
    {
      title:"Todo List App",
      description: "An Star Wars planets app",
      imgUrl: todoapp,
      githubLink: '',
    },
    {
      title:"Blog de Eduardo Tangara",
      description: "An Star Wars planets app",
      imgUrl: tangara,
      githubLink: '',
    },
    {
      title:"Music Player App",
      description: "An Star Wars planets app",
      imgUrl: itunes,
      githubLink: '',
    },
    {
      title:"Delivery App",
      description: "An Star Wars planets app",
      imgUrl: deliveryApp,
      githubLink: '',
    },
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>Alguns projetos que desenvolvi utilizando diferentes abordagens:</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Página 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first"> 
                  <Row>
                    {
                      projects.map((p) => (<ProjectCard key={p.title} {...p}/>))
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
              </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
