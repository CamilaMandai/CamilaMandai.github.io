import { Container, Row, Col } from "react-bootstrap";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import myPic from '../assets/minhaFoto.png';

export default function Skills() {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  return (
    <section className="skill" id="skills">
      <Container>
      <div className="skill-bx">
        <h2>Sobre Mim</h2>
        <Row>
          <Col>
             <p>Eu gosto de criar coisas que vagam pela internet. Sou bióloga de formação e desde que me conheço a programação me persegue. Meu interesse em desenvolvimento web, mais especificamente, começou quando eu quis fazer o site da empresa de atividades ao ar livre do meu companheiro. Não deu tempo de fazer o projeto na época, mas eu quis continuar estudando só por diversão! </p>
              <p id="highlight">Em 2022, decidi entrar na Trybe e conhecer um pouco mais sobre como é mercado de trabalho na área de tecnologia</p>
              <p>Atualmente, tenho trabalhado em projetos full stack utilizando as mais diversas e recentes tecnologias. Não me vejo atuando em outra área.</p>
              <p>Algumas tecnologias que tenho utilizado:</p>
              <ul className="tech-list">
                <div>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                </div>
                <div>
                  <li>Sequelize</li>
                  <li>Mongodb</li>
                  <li>Mongoose</li>
                  <li>Docker</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                </div>
              </ul>
              {/* <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src="" alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="" alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="" alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="" alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="" alt="image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
           
            </Col>
            <Col className="skill-img">
              <img className="background-image-left" src={myPic} alt="Minha foto"/>
              <div className="square"></div>
            </Col>
        </Row> 
        </div>
      </Container>
      <img className="background-image-left" src="" alt="image"/>
    </section>
  )
}
