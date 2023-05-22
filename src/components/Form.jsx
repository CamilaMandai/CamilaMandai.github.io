import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function Form() {
  const formInitialDetails = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    message:'',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const inputHandler = ({target}) => {
    const {name, value} = target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Enviando...')
    let response = await fetch('http://localhost:5000/contact', {
      method:"POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8"
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Enviado');
    let result = response.json();
    setFormDetails(formInitialDetails);
    if(result.code === 200){
      setStatus({success:true, message: 'Mensagem enviada com sucesso'});
    } else {
      setStatus({success: false, message: 'Ocorreu um erro, por favor tente novamente mais tarde'});
    }
  }
  return (
    <section className="contact">
      <Container>
        <Row>
          <Col md="6">
            <img src='' alt="Imagem de contate-me"/>
          </Col>
          <Col md="6">
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm="6" className="px-1">
                  <input type="text" value={formDetails.firstName}  placeholder="Nome" name="firstName" onChange={inputHandler}/>
                </Col>
                <Col sm="6" className="px-1">
                  <input type="text" value={formDetails.lastName}  placeholder="Sobrenome" name="lastName" onChange={inputHandler}/>
                  </Col>
                <Col sm="6" className="px-1">
                  <input type="email" value={formDetails.email}  placeholder="Email" name="email" onChange={inputHandler}/>
                  </Col>
                <Col sm="6" className="px-1">
                  <input type="phone" value={formDetails.email}  placeholder="Telefone" name="phone" onChange={inputHandler}/>
                  </Col>
                <Col sm="6" className="px-1">
                  <textarea row="6" value={formDetails.message} placeholder="Escreva sua mensagem" name="message" onChange={inputHandler}/>
                  <button type="submit">{buttonText}</button>
                </Col>
                {
                  status.message && 
                  <Col>
                    <p className={!status.success ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
