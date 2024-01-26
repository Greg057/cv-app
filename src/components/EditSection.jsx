import PersonalInfo from "./PersonalInfo"
import EducationInfo from "./EducationInfo"
import ExperienceInfo from "./ExperienceInfo"
import "../styles/info-container.css"
import { useState } from "react";
import uniqid from 'uniqid';

export default function EditSection ({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, addEducationInfo, experienceInfo, setExperienceInfo }) {
    const [activeIndex, setActiveIndex] = useState();

    function handleClick(id) {
        activeIndex === id ? setActiveIndex() : setActiveIndex(id)
    }

    return (
        <div className="edit-section">
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

            <div className="info-container">
                <h2>Education</h2>
                {educationInfo.map(education => 
                    <EducationInfo educationInfo={education} key={education.id} id={education.id} setEducationInfo={setEducationInfo} isActive={activeIndex === education.id} handleClick={handleClick}/> )}
                <button onClick={() => {
                    const newID = uniqid()
                    addEducationInfo([
                        ...educationInfo,
                        { id: newID, school:"Enter education or delete", degree:"", startDate: "", endDate:"", location:"" }
                    ])
                    setActiveIndex(newID)
                }}>Add Education</button>
            </div>

            {experienceInfo.map(experience => 
                <ExperienceInfo experienceInfo={experience} key={experience.id} id={experience.id} setExperienceInfo={setExperienceInfo}/> )}
        </div>
    )
}