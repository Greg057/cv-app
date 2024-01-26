import InputField from "./InputField";

export default function ExperienceInfo ({ experienceInfo, id, setExperienceInfo, isActive, handleClick, removeExperience }) {
  
    return (
        <div>
            <div className="edit-item" onClick={() => !isActive && handleClick(id)}>
                {isActive ?
                <>
                    <InputField title="Company Name" info={experienceInfo} valueToChange="companyName" id={id} setFunction={setExperienceInfo} />
                    <InputField title="Position Title" info={experienceInfo} valueToChange="positionTitle" id={id} setFunction={setExperienceInfo} />
                    <InputField title="Start Date" info={experienceInfo} valueToChange="startDate" id={id} setFunction={setExperienceInfo} />
                    <InputField title="End Date" info={experienceInfo} valueToChange="endDate" id={id} setFunction={setExperienceInfo} />
                    <InputField title="Location" info={experienceInfo} valueToChange="location" id={id} setFunction={setExperienceInfo} />
                    <InputField title="Description" info={experienceInfo} valueToChange="description" id={id} setFunction={setExperienceInfo} />
                    <button onClick={() => handleClick(id)}>Close</button>
                    <button onClick={() => removeExperience(id)}>delete</button>
                </>
                : <h3>{experienceInfo.companyName}</h3>}
            </div>
        </div>
    )
}