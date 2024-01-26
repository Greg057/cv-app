import InputField from "./InputField"


export default function PersonalInfo ({ personalInfo, setPersonalInfo }) {
    return (
        <div className="info-container">
            <h2>Personal Information</h2>
            <InputField title="Full Name" info={personalInfo} valueToChange="fullName" setFunction={setPersonalInfo}/>
            <InputField title="Email" info={personalInfo} valueToChange="email" setFunction={setPersonalInfo}/>
            <InputField title="Phone Number" info={personalInfo} valueToChange="phoneNumber" setFunction={setPersonalInfo}/>
            <InputField title="Address" info={personalInfo} valueToChange="address" setFunction={setPersonalInfo}/>
        </div>
    )
}