import React from 'react';
import './index.scss';
import {FiFacebook, FiInstagram, FiGithub, FiLinkedin} from 'react-icons/fi'

const AboutCard = ({ img, name, miniDescription, description, instaLink, gitLink, linkedLink }) => {
  return (
    <div className="about-card">
      <div className='second-result'>
      <img src={img} alt={name} className="about-card-img" />
      <h2 className="about-card-name">{name}</h2>
      <p className="about-card-mini-description">{miniDescription}</p>
      <p className="about-card-description">{description}</p>
      <div className='icons'>
        <a href={instaLink}>
        <FiInstagram />
        </a>
        <a href={gitLink}>
        <FiGithub />
        </a>
        <a href={linkedLink}>
         <FiLinkedin />
        </a>
      </div>
      </div>
    </div>
  );
};

export default AboutCard;
