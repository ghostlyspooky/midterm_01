import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  const [inputValue1, setInputValue1] = useState('');
  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const [inputValue2, setInputValue2] = useState('');
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const [inputValue3, setInputValue3] = useState('');
  const handleChange3 = (event) => {
    setInputValue3(event.target.value);
  };
 
  const [inputValue4, setInputValue4] = useState('');
  const handleChange4 = (event) => {
    setInputValue4(event.target.value);
  };

  const [inputValue5, setInputValue5] = useState('');
  const handleChange5 = (event) => {
    setInputValue5(event.target.value);
  };

  const EmailSender = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = () => {
      window.Email.send({
        Host: "smtp.jowen22@murraystate.edu", // Change this to your SMTP server
        Username: "your-email@example.com", // Your email
        Password: "your-email-password", // Your email password
        To: to,
        From: "ktaylor58@murraystate.edu", // Your email
        Subject: subject,
        Body: message,
      })
      .then((message) => alert("Mail sent successfully"))
      .catch((error) => alert("Mail not sent: " + error));
    };
    
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <p>Welcome SuperHacker You Are Inz</p>
        <p>Submit your Information so you can Register</p>

        <input
        type="text"
        value={inputValue1} //what user has inputted
        onChange= {handleChange1}
        placeholder="Username"
        />

        <input //exact same as username
        type="text"
        value={inputValue2} 
        onChange= {handleChange2}
        placeholder="Email"
        />
        <input
        type="text"
        value={inputValue3} //what user has inputted
        onChange= {handleChange3}
        placeholder="Username"
        />

        <input //exact same as username
        type="text"
        value={inputValue4} 
        onChange= {handleChange4}
        placeholder="FirstName"
        />

        <input //exact same as username
        type="text"
        value={inputValue5} 
        onChange= {handleChange5}
        placeholder="LastName"
        />
        <button onClick={goToHomePage}>HOME</button>
      </div>
    );
  };
  
  export default WelcomePage;
  
  