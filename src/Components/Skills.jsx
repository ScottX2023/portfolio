import React from "react";
import "../Sass/skills.scss";
import datas1 from "../skillsData.json";

function Skills() {
    if (!datas1 || datas1.length === 0) {
        return null;
    }
    const { langages, framework, outils } = datas1[0];

    return (
        <>
            <h2 className="skills-title">Compétences</h2>
            <div className="skills_container">
                <div className="skills_container_1 skills-icons">
                    <div className="skills_container_1_title">
                        <h3>Outils</h3> 
                    </div>    
                    {outils.map((outil, index) => (
                        <div key={index} className="skill-item">
                            <img src={`/${outil.path}`} alt={outil.description} />
                            <p>{outil.description}</p>
                        </div>
                    ))}
                </div>
                <div className="skills_container_2 skills-icons">
                    <div className="skills_container_2_title">
                        <h3>Librairies</h3> 
                    </div>   
                    {framework.map((frameworkItem, index) => (
                        <div key={index} className="skill-item">
                            <img src={`/${frameworkItem.path}`} alt={frameworkItem.description} />
                            <p>{frameworkItem.description}</p>
                        </div>
                    ))}
                </div>
                <div className="skills_container_3 skills-icons">
                    <div className="skills_container_3_title">
                        <h3>Langages</h3> 
                    </div>
                    {langages.map((langage, index) => (
                        <div key={index} className="skill-item">
                            <img src={`/${langage.path}`} alt={langage.description} />
                            <p>{langage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skills;
