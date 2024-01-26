import InputField from "./InputField";

export default function ExperienceInfo () {
    return (
        <div className="info-container">
            <h2>Experience</h2>
            <InputField title="Company Name"/>
            <InputField title="Position Title"/>
            <InputField title="Start Date"/>
            <InputField title="End Date"/>
            <InputField title="Location"/>
            <InputField title="Description"/>
        </div>
    )
}