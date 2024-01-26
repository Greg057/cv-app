import PersonalInfo from "./PersonalInfo"
import EducationInfo from "./EducationInfo"
import ExperienceInfo from "./ExperienceInfo"
import "../styles/info-container.css"


export default function EditSection ({ personalInfo, setPersonalInfo }) {
    return (
        <div className="edit-section">
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            <EducationInfo />
            <ExperienceInfo />
        </div>
    )
}