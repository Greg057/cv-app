import EducationSection from "./EducationSection"
import ExperienceSection from "./ExperienceSection"
import "../styles/resume-section.css"

export default function ResumeSection ({ personalInfo, educationInfo, experienceInfo }) {
    

    return (
        <div className="resume-section">
            <div className="top-section">
                <h1>{personalInfo.fullName}</h1>
                <div>
                    <h6>{personalInfo.email}</h6>
                    <h6>{personalInfo.phoneNumber}</h6>
                    <h6>{personalInfo.address}</h6>
                </div>
            </div>
            <h3>Education</h3>
            {educationInfo.map(education => 
                <EducationSection educationInfo={education} key={education.id}/> )}
            <h3>Experience</h3>
            {experienceInfo.map(experience => 
                <ExperienceSection experienceInfo={experience} key={experience.id}/> )}
        </div>
    )
}