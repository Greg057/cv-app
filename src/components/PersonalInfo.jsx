import InputField from "./InputField"


export default function PersonalInfo () {
    return (
        <div className="info-container">
            <h2>Personal Information</h2>
            <InputField title="Full Name"/>
            <InputField title="Email"/>
            <InputField title="Phone Number"/>
            <InputField title="Address"/>
        </div>
    )
}