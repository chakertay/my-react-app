import React from 'react';

// Assuming you have images for the illustrations
//import teacherIllustration from './path-to-teacher-illustration.jpg';
//import classroomIllustration from './path-to-classroom-illustration.jpg';

const WebPageSection = ({ teacherIllustration, classroomIllustration }) => {
  return (
    <div className="webpage-section">
      <div className="section" id="section-01">
        <h2>A true teacher!</h2>
        <p>I'm a professional educator or researcher. I have more than 5 years of experience teaching foreign languages so you can be sure that you are going to have fun and also you are going to learn a lot.</p>
        <img src={teacherIllustration} alt="Teacher Illustration" />
      </div>
      <div className="section" id="section-02">
        <h2>You choose your classroom</h2>
        <p>At your house, in your work or while you travel! You can choose where you want to learn this beautiful language.</p>
        <img src={classroomIllustration} alt="Classroom Illustration" />
      </div>
    </div>
  );
}

export default WebPageSection;
