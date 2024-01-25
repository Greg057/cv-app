import PersonalInfo from "./PersonalInfo"
import EducationInfo from "./Educationinfo"
import ExperienceInfo from "./Experienceinfo"
import "../styles/info-container.css"

export default function EditSection () {
    return (
        <div>
            <PersonalInfo />
            <EducationInfo />
            <ExperienceInfo />
        </div>
    )
}