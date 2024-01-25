import PersonalInfo from "./PersonalInfo"
import EducationInfo from "./Educationinfo"
import ExperienceInfo from "./Experienceinfo"
import "../styles/info-container.css"


export default function EditSection ({ setFullName, setEmail, setPhoneNumber, setAddress }) {
    return (
        <div className="edit-section">
            <PersonalInfo setFullName={setFullName} setEmail={setEmail} setPhoneNumber={setPhoneNumber} setAddress={setAddress} />
            <EducationInfo />
            <ExperienceInfo />
        </div>
    )
}