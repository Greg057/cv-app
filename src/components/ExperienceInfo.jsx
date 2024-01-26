import InputField from "./InputField";

export default function ExperienceInfo ({ experienceInfo, id, setExperienceInfo }) {
    return (
        <div className="info-container">
            <h2>Experience</h2>
            <InputField title="Company Name" info={experienceInfo} valueToChange="companyName" id={id} setFunction={setExperienceInfo} />
            <InputField title="Position Title" info={experienceInfo} valueToChange="positionTitle" id={id} setFunction={setExperienceInfo} />
            <InputField title="Start Date" info={experienceInfo} valueToChange="startDate" id={id} setFunction={setExperienceInfo} />
            <InputField title="End Date" info={experienceInfo} valueToChange="endDate" id={id} setFunction={setExperienceInfo} />
            <InputField title="Location" info={experienceInfo} valueToChange="location" id={id} setFunction={setExperienceInfo} />
            <InputField title="Description" info={experienceInfo} valueToChange="description" id={id} setFunction={setExperienceInfo} />
        </div>
    )
}