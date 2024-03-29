import React from 'react';
import Skills from '../Components/Skills';
import "../Sass/home.scss"


function HomePage(){ 
    return( 
  <div>
    <div className='about'>
      <h2 className='about-title'>A Propos</h2>
      <p>Bienvenu sur mon portfolio !</p>
      <p>Je m'appelle Scott Xoual je suis développeur Front-End de formation après m'être reconvertie à la fin de ma licence de droit.</p>
      <p>Mon portfolio vous offre la possibilité d'observer certains projets que j'ai pu effectuer durant ma formation au sein d'Openclassroom.</p>
      <p>Vous trouverez à la suite de cette introduction une section présentant les librairies, langages et outils que je maitrise.</p>
      <p>Si vous souhaitez me contacter n'hésitez pas à m'envoyer un mail depuis le formulaire de contact a disposition !</p>
    </div>  
    <Skills />
  </div>
)};

export default HomePage;
