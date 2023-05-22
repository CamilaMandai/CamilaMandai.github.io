import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title:"Star Wars",
      description: "An Star Wars planets app",
      imgUrl: "",
    }
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
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
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
