import InputField from "./InputField";

export default function EducationInfo ({ educationInfo, id, setEducationInfo }) {
    return (
        <div className="info-container">
            <h2>Education</h2>
            <InputField title="School" info={educationInfo} valueToChange="school" id={id} setFunction={setEducationInfo} />
            <InputField title="Degree" info={educationInfo} valueToChange="degree" id={id} setFunction={setEducationInfo} />
            <InputField title="Start date" info={educationInfo} valueToChange="startDate" id={id} setFunction={setEducationInfo} />
            <InputField title="End date" info={educationInfo} valueToChange="endDate" id={id} setFunction={setEducationInfo} />
            <InputField title="Location" info={educationInfo} valueToChange="location" id={id} setFunction={setEducationInfo} />
        </div>
    )
}