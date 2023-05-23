import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log("Server up and running"));

router.get('/', (req, res) => res.send('Hello, server on!'))

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '*********@gmail.com',
    pass: '*******',
  },
});

contactEmail.verify((error) => {
  if(error) console.log(error);
    else console.log("Ready");
})

router.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body; 
  console.log(firstName)
  const mail = {
    from: `${firstName} ${lastName}`,
    to: '*********@gmail.com',
    subject: 'Contato do form do Postifolio',
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Telefone: ${phone}</p>
           <p>Mensagem: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) return res.json({code: 424, message: 'Ocorreu um erro, por favor tente novamente mais tarde'})
    return res.json({code: 200, message: 'Mensagem enviada com sucesso'})
  })
})