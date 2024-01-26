import { useState } from 'react'
import './styles/App.css'
import EditSection from './components/EditSection'
import ResumeSection from './components/ResumeSection'

export default function App() {
  /* const [fullName, setFullName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@gmail.com")
  const [phoneNumber, setPhoneNumber] = useState("123-456 789")
  const [address, setAddress] = useState("Mountain View, US") */

  const [personalInfo, setPersonalInfo] = useState({fullName: "John Doe", email: "john.doe@gmail.com", phoneNumber: "123-456 789", address: "Mountain View, US"})

  return (
    <div className='main-container'>
      {/* <EditSection setFullName={setFullName} setEmail={setEmail} setPhoneNumber={setPhoneNumber} setAddress={setAddress} />
      <ResumeSection fullName={fullName} email={email} phoneNumber={phoneNumber} address={address} /> */}

      <EditSection setPersonalInfo={setPersonalInfo} personalInfo={personalInfo}/>
      <ResumeSection personalInfo={personalInfo} />
    </div>
  )
}


