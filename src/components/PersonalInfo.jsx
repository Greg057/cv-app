import InputField from "./InputField"


export default function PersonalInfo ({ setFullName, setEmail, setPhoneNumber, setAddress }) {
    return (
        <div className="info-container">
            <h2>Personal Information</h2>
            <InputField title="Full Name" setFunction={setFullName}/>
            <InputField title="Email" setFunction={setEmail}/>
            <InputField title="Phone Number" setFunction={setPhoneNumber}/>
            <InputField title="Address" setFunction={setAddress}/>
        </div>
    )
}