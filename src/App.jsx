import { useState } from 'react'
import './styles/App.css'
import EditSection from './components/EditSection'
import ResumeSection from './components/ResumeSection'
import sampleData from './sampleData'

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(sampleData.educationInfo)
  const [experienceInfo, setExperienceInfo] = useState(sampleData.experienceInfo)
  
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


