import PersonalInfo from "./PersonalInfo"
import EducationInfo from "./EducationInfo"
import ExperienceInfo from "./ExperienceInfo"
import "../styles/info-container.css"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EditSection ({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, addEducation, removeEducation, experienceInfo, setExperienceInfo, addExperience, removeExperience }) {
    const [activeIndexEducation, setActiveIndexEducation] = useState();
    const [activeIndexExperience, setActiveIndexExperience] = useState();

    function handleClickEducation(id) {
        activeIndexEducation === id ? setActiveIndexEducation() : setActiveIndexEducation(id)
    }

    function handleClickExperience(id) {
        activeIndexExperience === id ? setActiveIndexExperience() : setActiveIndexExperience(id)
    }

    return (
        <div className="edit-section">
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

            <div className="info-container">
                <h2>Education</h2>
                {educationInfo.map(education => 
                    <EducationInfo educationInfo={education} key={education.id} id={education.id} setEducationInfo={setEducationInfo} 
                                    isActive={activeIndexEducation === education.id} handleClick={handleClickEducation} removeEducation={removeEducation} /> )}
                <button onClick={() => {
                    const newID = uuidv4()
                    addEducation([
                        ...educationInfo,
                        { id: newID, school:"Enter education or delete", degree:"", startDate: "", endDate:"", location:"" }
                    ])
                    setActiveIndexEducation(newID)
                }}>Add Education</button>
            </div>

            <div className="info-container">
                <h2>Experience</h2>
                {experienceInfo.map(experience => 
                    <ExperienceInfo experienceInfo={experience} key={experience.id} id={experience.id} setExperienceInfo={setExperienceInfo}
                                    isActive={activeIndexExperience === experience.id} handleClick={handleClickExperience} removeExperience={removeExperience} /> )}
                <button onClick={() => {
                    const newID = uuidv4()
                    addExperience([
                        ...experienceInfo,
                        { id: newID, companyName:"Enter experience or delete", positionTitle:"", startDate: "", endDate:"", location:"", description: "" }
                    ])
                    setActiveIndexExperience(newID)
                }}>Add Experience</button>
            </div>

            
        </div>
    )
}