import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImage from "../assets/banner-image.png";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300-Math.random()*100);
  const toRotate = ["Web Developer", "Full Stack"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta / 2);
    }
    if(!isDeleting && updatedText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <div className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col className="banner-presentation" xs={12} md={7}>
            <span className="tagline">Olá</span>
            <h1>Sou Camila Mandai <span className="wrap">{text}<span className="blinking-cursor">|</span></span></h1>
            <p>Este é o meu portifólio, fique à vontade para explorar o meu mundo</p>
            <a href="#contact"><button>Vamos conectar? <ArrowRightCircle size={25} /></button></a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImage} alt="Imagem do banner" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
