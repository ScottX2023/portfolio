import React, { useState } from "react";
import data from "../projectsData.json";
import '../Sass/projectinfo.scss';
import { useParams } from "react-router";

function ProjectInfo() {
    const [isSkillsClicked, setIsSkillsClicked] = useState(false);
    const [isDescClicked, setIsDescClicked] = useState(false);
    const { id } = useParams();
    const project = data.find((item) => item.id === id);
    const [Open, setOpen] = useState(false);
    const [dscOpen, setdscOpen] = useState(false);

    const toggle = () => {
        setOpen(!Open);
    };

    const dscToggle = () => {
        setdscOpen(!dscOpen);
    };

    return (
        <>
            <div className="info-container">
                <div className="skills-container">
                    <button
                        className={`skills-btn ${isSkillsClicked ? 'clicked' : ''}`}
                        onClick={() => {
                            toggle();
                            setIsSkillsClicked(!isSkillsClicked);
                        }}
                    >
                        Skills
                    </button>
                    {Open && (
                        <div className="toggle">
                            <div className="skills">
                                <div className="skills-icons">
                                    {project.skill.map((skill, index) => (
                                        <img key={index} src={`/${skill}`} alt="Compétences" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="description-container">
                    <button
                        className={`skills-btn ${isDescClicked ? 'clicked' : ''}`}
                        onClick={() => {
                            dscToggle();
                            setIsDescClicked(!isDescClicked);
                        }}
                    >
                        Description
                    </button>
                    {dscOpen && (
                        <div className="toggle">
                            <div>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='github-container'>
                <button onClick={() => window.open(project.githubLink, "_blank")} className="github-button">
                    GitHub
                </button>
                {project.githubPages &&
                <button onClick={() => window.open(project.githubPages, "_blank")} className="github-button ">
                    Voir le site
                 </button>

                }
            </div>
        </>
    );
}

export default ProjectInfo;
