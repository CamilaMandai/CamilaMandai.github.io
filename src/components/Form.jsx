import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import resumeIcon from '../assets/cv.png';

export default function Form() {
  const formInitialDetails = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    message:'',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [status, setStatus] = useState({message:''});

  const inputHandler = ({target}) => {
    const {name, value} = target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    })
  }
  const [state, handleSubmit] = useForm("xwkjjlqw");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText('Enviando...')
  //   let response = await fetch('http://localhost:5000/contact', {
  //     method:"POST",
  //     headers: {
  //       "Content-Type": "Application/json;charset=utf-8"
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText('Enviado');
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if(result.code === 200){
  //     setStatus({success: true, message: result.message });
  //   } else {
  //     setStatus({success: false, message: result.message});
  //   }
  // }

useEffect(() => {
  if(state.succeeded) setFormDetails(formInitialDetails)
})
  
  return (
    <section className="contact" id="contact">
      <h2>Entre em contato</h2>
      <Container>
        <Row>
          <Col lg="6" md="12">
            <div className='contact-email'>
              <a href="mailto:cayumandai@gmail.com">cayumandai@gmail.com</a>
            </div>
            <div className='contact-tel'>
            <a href="tel:+5518996572668">Diga Oi 👋</a>
            </div>
            <div className="social-icon contact-icon">
               <a href="https://github.com/CamilaMandai" rel="noreferrer" target="_blank"><img src={githubLogo} alt="github icon" /></a>
               <a href="https://www.linkedin.com/in/camila-mandai" rel="noreferrer" target="_blank"><img src={linkedinLogo} alt="linkedin icon" /></a>
               <a href="https://www.linkedin.com/in/camila-mandai" rel="noreferrer" target="_blank"><img src={resumeIcon} alt="linkedin icon" /></a>
            </div>
          </Col>
          <Col lg="6">
            
            <form onSubmit={ handleSubmit
            // () => {
            //     handleSubmit();
            //     setFormDetails(formInitialDetails);
            //     setStatus({success: true, message: 'Já recebi sua mensagem, logo responderei' });
            //    }
            }>
              <Row>
                <Col lg="9" className="px-1">
                  <input type="text" value={formDetails.firstName}  placeholder="Nome Completo*" name="firstName" onChange={inputHandler} required/>
                </Col>
                <Col lg="9" className="px-1">
                  <input type="email" value={formDetails.email}  placeholder="Email*" name="email" onChange={inputHandler} required/>
                  </Col>
                <Col lg="9" className="px-1">
                  <textarea rows="6" value={formDetails.message} placeholder="Escreva sua mensagem*" name="message" onChange={inputHandler} required/>
                </Col>
                {
                  state.succeeded && (
                  <Col lg="9">
                    <p className={"success"}>Já recebi sua mensagem, logo responderei</p>
                  </Col>)
                }
                {
                  state.errors.length > 0 &&
                  <Col lg="9">
                   <p className={"danger"}>Houve um erro, tente novamente mais tarde ou entre em contato por um das formas ao lado</p>
                  </Col>
                }
                
                 <button className="form-btn" type="submit" disabled={state.submitting}>Enviar</button>
                
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
    // <section className="contact" id="contact">
    //   <Container>
    //     <Row>
    //       <Col md="6">
    //         <img src='' alt="Imagem de contate-me"/>
    //       </Col>
    //       <Col md="6">
    //         <h2>Entre em contato</h2>
    //         <form onSubmit={
    //           () => {
    //             handleSubmit();
    //             setButtonText('Enviado');
    //             setFormDetails(formInitialDetails);
    //             setStatus({success: true, message: 'Já recebi sua mensagem, logo responderei' });
    //            }
    //         }>
    //           <Row>
    //             <Col sm="6" className="px-1">
    //               <input type="text" value={formDetails.firstName}  placeholder="Nome" name="firstName" onChange={inputHandler}/>
    //             </Col>
    //             <Col sm="6" className="px-1">
    //               <input type="text" value={formDetails.lastName}  placeholder="Sobrenome" name="lastName" onChange={inputHandler}/>
    //               </Col>
    //             <Col sm="6" className="px-1">
    //               <input type="email" value={formDetails.email}  placeholder="Email" name="email" onChange={inputHandler}/>
    //               </Col>
    //             <Col sm="6" className="px-1">
    //               <input type="phone" value={formDetails.phone}  placeholder="Telefone" name="phone" onChange={inputHandler}/>
    //               </Col>
    //             <Col sm="6" className="px-1">
    //               <textarea rows="6" value={formDetails.message} placeholder="Escreva sua mensagem" name="message" onChange={inputHandler}/>
    //               <button type="submit" disabled={state.submitting}>{buttonText}</button>
    //             </Col>
    //             {
    //               status.message && 
    //               <Col>
    //                 <p className={!status.success ? "danger" : "success"}>{status.message}</p>
    //               </Col>
    //             }
    //           </Row>
    //         </form>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
  )
}
