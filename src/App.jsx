import { useState } from 'react'
import './styles/App.css'
import EditSection from './components/EditSection'
import ResumeSection from './components/ResumeSection'

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({fullName: "John Doe", email: "john.doe@gmail.com", phoneNumber: "123-456 789", address: "Mountain View, US"})

  return (
    <div className='main-container'>
      <EditSection setPersonalInfo={setPersonalInfo} personalInfo={personalInfo}/>
      <ResumeSection personalInfo={personalInfo} />
    </div>
  )
}


