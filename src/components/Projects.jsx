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
      description: "Aplicação desenvolvida em React de um ecommerce com tela de produtos disponíveis e carrinho de compras. A aplicação consome dados da API do Mercado Livre",
      imgUrl: ecommerce,
      githubLink: '',
    },
    {
      title:"Todo List App",
      description: "Um Todo List desenvolvido em React e backend em Python Django e banco de dados MySQL",
      imgUrl: todoapp,
      githubLink: '',
    },
    {
      title:"Blog de Eduardo Tangara",
      description: "Portifolio de um artista com trabalhos disponíveis, blog e página de administrador com autenticação e autorização. Aplicação foi desenvolvida em ejs com banco de dados Mongodb",
      imgUrl: tangara,
      githubLink: '',
    },
    {
      title:"Music Player App",
      description: "Aplicativo de música desenvolvido em React com dados consumidos da API do Itunes",
      imgUrl: itunes,
      githubLink: '',
    },
    {
      title:"Delivery App",
      description: "Aplicativo de entrega de bebidas com telas de produtos, perfis de usuário e lista de compras. Desenvolvido com React no frontend,  Node.js no backend e banco de dados MySQL.",
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
            <p>Alguns exemplos de projetos FullStacks desenvolvidos:</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Página 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav> */}
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
