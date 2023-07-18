import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ecommerce from '../assets/ecommerce.png';
import todoapp from '../assets/todoapp.png';
import tangara from '../assets/tangara.png';
import itunes from '../assets/itunesClone.png';
import deliveryApp from '../assets/deliveryApp.png';
import recipesApp from '../assets/recipeApp.png';

export default function Projects() {
  const projects = [
    {
      title:"Ecommerce",
      description: "Ecommerce com tela de produtos disponíveis e carrinho de compras. Desenvolvido em React com consumo da API do Mercado Livre",
      imgUrl: ecommerce,
      githubLink: 'https://github.com/CamilaMandai/ecommerce-cart',
    },
    {
      title:"Todo List App",
      description: "Um Todo List desenvolvido em React e backend em Python Django e banco de dados MySQL",
      imgUrl: todoapp,
      githubLink: 'https://github.com/CamilaMandai/todoListApp',
    },
    {
      title:"Blog e Portifolio",
      description: "Portifolio com blog e página de administrador para criação de postagens. Aplicação desenvolvida em ejs, express e banco de dados Mongodb",
      imgUrl: tangara,
      githubLink: 'https://github.com/CamilaMandai/eduardo-tangara',
    },
    {
      title:"Music Player App",
      description: "Aplicativo de música desenvolvido em React com dados consumidos da API do Itunes",
      imgUrl: itunes,
      githubLink: 'https://github.com/CamilaMandai/my-tunes',
    },
    {
      title:"Delivery App",
      description: "Aplicativo de entrega de bebidas com tela de produtos, perfil de usuários e lista de compras. Desenvolvido em React,  Express e MySQL",
      imgUrl: deliveryApp,
      githubLink: 'https://github.com/CamilaMandai/delivery-app',
    },
    {
      title:"Recipes App",
      description: "Aplicativo de receitas vegetarianas e veganas. Desenvolvido em Vue com o pacote Pinia para gerenciamente de estados e dados da API Mealdb",
      imgUrl: recipesApp,
      githubLink: 'https://github.com/CamilaMandai/recipe-app-vue',
    },
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>Alguns exemplos de projetos desenvolvidos:</p>
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
                {/* <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane> */}
              </Tab.Content>
              </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
