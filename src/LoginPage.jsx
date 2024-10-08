import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const LoginPage = () => {

  const navigate = useNavigate();
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const goToQuizPage = () => {
    navigate('/quiz'); // Navigate to the Login page
  };

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleSubmit = () => {
    const username ='user';
    const password = 'pass';
    
    if(inputValue1 == username && inputValue2 == password)
      goToQuizPage();

    setInputValue1(''); //Clear the input field after submission
    setInputValue2('');
  };

    return (
      <div>
        <h1>Login Here</h1>
        <p>This is the Login Page.</p>

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
        placeholder="Password"
        />

        <button onClick={handleSubmit}>Take Qualifier Quiz</button>
      </div> //goToLoginPage
    );
  };
  
  export default LoginPage;