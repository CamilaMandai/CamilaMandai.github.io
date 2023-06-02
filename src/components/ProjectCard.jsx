import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function ProjectCard({title, description, imgUrl, githubLink}) {
  return (
    <Col sm="6" md="4">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`Imagem do projeto ${title}`}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p><a href={githubLink}>Repositório no Github</a></p>
        </div>
      </div>
    </Col>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
}


