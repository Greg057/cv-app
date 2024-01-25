//import { useState } from 'react'
import './styles/App.css'
import EditSection from './components/EditSection'
import ResumeSection from './components/ResumeSection'

function App() {
  return (
    <div className='main-container'>
      <EditSection />
      <ResumeSection />
    </div>
  )
}

export default App
