import InputField from "./InputField";

export default function EducationInfo ({ educationInfo, id, setEducationInfo, isActive, handleClick, removeEducation }) {
    return (
        <div>
            <div className="edit-item" onClick={() => !isActive && handleClick(id)}>
                {isActive ?
                <>
                    <InputField title="School" info={educationInfo} valueToChange="school" id={id} setFunction={setEducationInfo} />
                    <InputField title="Degree" info={educationInfo} valueToChange="degree" id={id} setFunction={setEducationInfo} />
                    <InputField title="Start date" info={educationInfo} valueToChange="startDate" id={id} setFunction={setEducationInfo} />
                    <InputField title="End date" info={educationInfo} valueToChange="endDate" id={id} setFunction={setEducationInfo} />
                    <InputField title="Location" info={educationInfo} valueToChange="location" id={id} setFunction={setEducationInfo} />
                    <div className="edit-buttons">
                        <button onClick={() => removeEducation(id)}><span className="material-symbols-outlined">delete</span>Delete</button>
                        <button className="close" onClick={() => handleClick(id)}><span className="material-symbols-outlined">close</span>Close</button>
                    </div>
                    
                </>
                : <h4>{educationInfo.school}</h4>}
            </div>
        </div>
    )
}