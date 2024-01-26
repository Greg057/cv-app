import PersonalInfo from "./PersonalInfo"
import EducationInfo from "./EducationInfo"
import ExperienceInfo from "./ExperienceInfo"
import "../styles/info-container.css"


export default function EditSection ({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo }) {
    return (
        <div className="edit-section">
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            {educationInfo.map(education => 
                <EducationInfo educationInfo={education} key={education.id} id={education.id} setEducationInfo={setEducationInfo}/> )}
            {/* <ExperienceInfo /> */}
        </div>
    )
}