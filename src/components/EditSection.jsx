import PersonalInfo from "./edit_section/PersonalInfo"
import EducationInfo from "./edit_section/EducationInfo"
import ExperienceInfo from "./edit_section/ExperienceInfo"
import "../styles/edit-section.css"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EditSection ({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, addEducation, removeEducation, 
                                                                    experienceInfo, setExperienceInfo, addExperience, removeExperience }) {
    const [activeIndexEducation, setActiveIndexEducation] = useState();
    const [activeIndexExperience, setActiveIndexExperience] = useState();
    const [activeContainer, setActiveContainer] = useState("personal");

    function handleClickEducation(id) {
        activeIndexEducation === id ? setActiveIndexEducation() : setActiveIndexEducation(id)
    }

    function handleClickExperience(id) {
        activeIndexExperience === id ? setActiveIndexExperience() : setActiveIndexExperience(id)
    }

    function handleClickContainer(name) {
        activeContainer === name ? setActiveContainer() : setActiveContainer(name)
    }

    return (
        <div className="edit-section">
            <div className="info-container">
                <div className="info-container-header" onClick={() => {handleClickContainer("personal")}}>
                    <h2>Personal Information</h2>
                    <div className="material-symbols-outlined">expand_more</div>
                </div>
                {activeContainer === "personal" && <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />}
            </div>

            <div className="info-container">
                <div className="info-container-header" onClick={() => handleClickContainer("education")}>
                    <h2>Education</h2>
                    <div className="material-symbols-outlined">expand_more</div>
                </div>
                {activeContainer === "education" && educationInfo.map(education => 
                    <EducationInfo educationInfo={education} key={education.id} id={education.id} setEducationInfo={setEducationInfo} 
                                    isActive={activeIndexEducation === education.id} handleClick={handleClickEducation} removeEducation={removeEducation} /> )}
                {activeContainer === "education" && <button className="add-button" onClick={() => {
                    const newID = uuidv4()
                    addEducation([
                        ...educationInfo,
                        { id: newID, school:"Enter education or delete", degree:"", startDate: "", endDate:"", location:"" }
                    ])
                    setActiveIndexEducation(newID)
                }}><span className="material-symbols-outlined">add_circle</span>Add Education</button>
                }
            </div>

            <div className="info-container">
                <div className="info-container-header" onClick={() => handleClickContainer("experience")}>
                    <h2>Experience</h2>
                    <div className="material-symbols-outlined">expand_more</div>
                </div>
                {activeContainer === "experience" && experienceInfo.map(experience => 
                    <ExperienceInfo experienceInfo={experience} key={experience.id} id={experience.id} setExperienceInfo={setExperienceInfo}
                                    isActive={activeIndexExperience === experience.id} handleClick={handleClickExperience} removeExperience={removeExperience} /> )}
                {activeContainer === "experience" && <button className="add-button" onClick={() => {
                    const newID = uuidv4()
                    addExperience([
                        ...experienceInfo,
                        { id: newID, companyName:"Enter experience or delete", positionTitle:"", startDate: "", endDate:"", location:"", description: "" }
                    ])
                    setActiveIndexExperience(newID)
                }}><span className="material-symbols-outlined">add_circle</span>Add Experience</button>
                }
            </div>
        </div>
    )
}