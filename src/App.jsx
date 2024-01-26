import { useState } from 'react'
import './styles/App.css'
import EditSection from './components/EditSection'
import ResumeSection from './components/ResumeSection'

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({fullName: "John Doe", email: "john.doe@gmail.com", phoneNumber: "123-456 789", address: "Mountain View, US"})
  const [educationInfo, setEducationInfo] = useState([{id: 0, school: "MIT University", degree: "Bachelor's Degree in Computer Science", 
                                                              startDate: "08/2020", endDate: "07/2024", location: "New York City, US"}, 
                                                              {id: 1, school: "MIT University", degree: "Master's Degree in Computer Science", 
                                                              startDate: "09/2024", endDate: "present", location: "Boston, US"}])

  function handleEducationChange(i, valueToChange, value) {
    const nextEducationInfo = educationInfo.map(education => {
      if (education.id === i) {
        return {
          ...education, [valueToChange]: value
        }
      } else {
        return education
      }
    })
    setEducationInfo(nextEducationInfo)
  }

  return (
    <div className='main-container'>
      <EditSection setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} setEducationInfo={handleEducationChange} educationInfo={educationInfo}/>
      <ResumeSection personalInfo={personalInfo} educationInfo={educationInfo} />
    </div>
  )
}


