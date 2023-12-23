import "./AboutScreen.css";
import React from 'react';


const AboutScreen = () => {
    return (
      <div className="aboutscreen">
        <h1 className="about-screen-title">About us</h1>
        <div className="about-screen-content">
          <p><br/>Easy path to the perfect online shop:</p>
          <p>Hello everyone, Myself Mayank Suthar. Currently I am pursuing BTech in Electronics and communication engineering from IIIT Himachal in 5th semester . I have a keen interest in Web development.</p>
          <p><br/><a href="https://www.linkedin.com/in/mayank-suthar-754584246/"><button className="button-link">Linkedin</button></a></p>
          <p><br/><a href="https://github.com/maxinput1234"><button className="button-link">Github</button></a></p>
          <p><br/>Services:</p>
          <p><br/>Front To Back - full stack application with React.js, Redux, Node.js, Express.js and MongoDB.</p>
          {/* <p><br/>- Building a backend API with Node.js and Express.js.</p> */}
          <p>- 📱 Order Anytime, Anywhere: Say goodbye to long lines and wait times! With our mobile ordering platform, you have the power to browse menus, customize your meals, and place orders from the convenience of your smartphone or tablet. Whether you're at home, at the office, or on the go, satisfying your cravings has never been this effortless.</p>
          {/* <p>- Using Redux for app state management.</p>
          <p>- Deploy application to VPS or Cloud Server.</p>
          <p>- Install and Configure Nginx on Ubuntu</p>
          <p>- Binding domain name.</p>
          <p>- HTTPS SSL</p>
          <p><br/>The preferred way of contacting me is to mail me at:</p> */}
          <p>sutharmayank001@gmail.com</p>
        </div>
      </div>
    );
  };
  
  
  export { AboutScreen };