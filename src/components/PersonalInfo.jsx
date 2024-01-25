import InputField from "./InputField"

export default function PersonalInfo () {
    return (
        <div className="personal-info">
            <h2>Personal Information</h2>
            <InputField title="Full name" placeholder="First and last name"/>
        </div>
    )
}