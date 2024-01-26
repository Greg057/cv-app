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
  const [experienceInfo, setExperienceInfo] = useState([{id: 0, companyName: "Google", positionTitle: "Software Engineer", 
                                                              startDate: "08/2020", endDate: "present", location: "San Francisco, US", description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"}, 
                                                              {id: 1, companyName: "Amazon", positionTitle: "Software Engineer Intern", 
                                                              startDate: "08/2018", endDate: "11/2018", location: "San Francisco, US", description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."}])                                                            

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

  function handleExperienceChange(i, valueToChange, value) {
    const nextExperienceInfo = experienceInfo.map(experience => {
      if (experience.id === i) {
        return {
          ...experience, [valueToChange]: value
        }
      } else {
        return experience
      }
    })
    setExperienceInfo(nextExperienceInfo)
  }

  return (
    <div className='main-container'>
      <EditSection setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} 
                    setEducationInfo={handleEducationChange} educationInfo={educationInfo}
                    setExperienceInfo={handleExperienceChange} experienceInfo={experienceInfo}/>
      <ResumeSection personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
    </div>
  )
}


