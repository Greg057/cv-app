import InputField from "./InputField";

export default function EducationInfo () {
    return (
        <div className="info-container">
            <h2>Education</h2>
            <InputField title="School"/>
            <InputField title="Degree"/>
            <InputField title="Start date"/>
            <InputField title="End date"/>
            <InputField title="Location"/>
        </div>
    )
}