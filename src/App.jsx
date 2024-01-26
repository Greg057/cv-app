import { useState } from 'react'
import './styles/App.css'
import EditSection from './components/EditSection'
import ResumeSection from './components/ResumeSection'
import sampleData from './sampleData'

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(sampleData.educationInfo)
  const [experienceInfo, setExperienceInfo] = useState(sampleData.experienceInfo)

  function handleEducationChange(id, valueToChange, value) {
    const nextEducationInfo = educationInfo.map(education => {
      if (education.id === id) {
        return {
          ...education, [valueToChange]: value
        }
      } else {
        return education
      }
    })
    setEducationInfo(nextEducationInfo)
  }

  function removeEducation (id) {
      setEducationInfo(educationInfo.filter(education =>
      education.id !== id))
  }

  function handleExperienceChange(id, valueToChange, value) {
    const nextExperienceInfo = experienceInfo.map(experience => {
      if (experience.id === id) {
        return {
          ...experience, [valueToChange]: value
        }
      } else {
        return experience
      }
    })
    setExperienceInfo(nextExperienceInfo)
  }

  function removeExperience (id) {
    setExperienceInfo(experienceInfo.filter(experience =>
    experience.id !== id))
  }

  return (
    <div className='main-container'>
      <EditSection setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} 
                    setEducationInfo={handleEducationChange} addEducation={setEducationInfo} removeEducation={removeEducation} educationInfo={educationInfo}
                    setExperienceInfo={handleExperienceChange} addExperience={setExperienceInfo} removeExperience={removeExperience} experienceInfo={experienceInfo}/>
      <ResumeSection personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
    </div>
  )
}




