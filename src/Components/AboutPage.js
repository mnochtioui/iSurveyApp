import React from 'react'
import { Link } from 'react-router-dom';
import builder from "../img/mounir.jpg";
import Image from 'react-bootstrap/Image';
import linkedin from '../img/icons8-linkedin-128.png'
import email from '../img/mail-icon-icone-e-mail.png'

const AboutPage = () => {

     
  return (
    <div>A propos du developpeur<hr />

<div className="row">
    <div className="col-6"><p><strong>Mounir CHTIOUI</strong></p>
    <p><a href="mailto:mounirchtioui@gmail.com" ><img src={email} width="40px" alt="email" />mounirchtioui@gmail.com</a> </p>
    <p><a href='https://www.linkedin.com/in/mounir-chtioui-8237187b'  target="_blank" rel="noopener noreferrer" ><img src={linkedin} width="40px" alt="linkedin" />linkedin.com/in/mounir-chtioui</a> </p>
    </div>
    <div className="col-6"><Image src={builder} alt="mounir" roundedCircle fluid  /></div>

</div>
<Link to="/">Retour </Link>
    </div>
  )
}

export default AboutPage