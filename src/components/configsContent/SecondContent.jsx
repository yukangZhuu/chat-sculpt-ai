import React from 'react';
import '../../styles/configsContent/SecondContent.css';
import bot1 from '../../images/bot1.png'
import bot2 from '../../images/bot2.png'
import bot3 from '../../images/bot3.png'

function SecondContent({ goToSlide }) {
  return (
    <div className="second-configs-content">
      <h2 className="second-configs-title">Basic Config: Who am I</h2>
      <div className='second-configs-image-container'>
        <img className="second-configs-image" src={bot1} alt="ChatSculpt.AI" />
        <img className="second-configs-image" src={bot2} alt="ChatSculpt.AI" />
        <img className="second-configs-image" src={bot3} alt="ChatSculpt.AI" />
      </div>
      <form className="second-configs-form">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" placeholder='like Mike?'/>
        <br />

        <label htmlFor="gender">Gender: </label>
        <select id="gender">
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <br />

        <label htmlFor="age">Age: </label>
        <input type="number" id="age" placeholder='eg. 20'/>
        <br />

        <label htmlFor="role">Role: </label>
        <select id="role">
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="artist">Artist</option>
            <option value="softwareEngineer">Software Engineer</option>
            <option value="teacher">Teacher</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="researchScientist">Research Scientist</option>
            <option value="dataAnalyst">Data Analyst</option>
            <option value="graphicDesigner">Graphic Designer</option>
            <option value="digitalMarketer">Digital Marketer</option>
            <option value="writer">Writer</option>
            <option value="journalist">Journalist</option>
            <option value="chef">Chef</option>
            <option value="lawyer">Lawyer</option>
            <option value="accountant">Accountant</option>
            <option value="engineer">Engineer</option>
            <option value="architect">Architect</option>
            <option value="musician">Musician</option>
            <option value="photographer">Photographer</option>
            <option value="fitnessTrainer">Fitness Trainer</option>
            <option value="psychologist">Psychologist</option>
        </select>

      </form>
      <div className="second-configs-buttons">
        <button onClick={() => goToSlide(1)}>Back</button>
        <button onClick={() => goToSlide(3)}>Next</button>
      </div>
    </div>
  );
}

export default SecondContent;