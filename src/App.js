import React from 'react';
import GeneralInfo from './components/GeneralInfor';
import EducationExperience from './components/EducationalExpirence';
import PracticalExperience from './components/PracticalExperience';
import './App.css';


function App() {
  return(
    <div className="App">
      <header>
          <h2>CV Submission</h2>
          <p>Do you want to work with us? Please fill in your details below.</p>
        </header>
      <GeneralInfo /><br />
      <EducationExperience /><br />
      <PracticalExperience />
    </div>
  )
}
export default App;
