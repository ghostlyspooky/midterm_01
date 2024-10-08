import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {

  const navigate = useNavigate();
  const goToWelcomePage = () => {
    navigate('/welcome'); // Navigate to the Welcome page
  };
  const [checked1, setChecked1] = React.useState(false);
  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  const [checked2, setChecked2] = React.useState(false);
  const handleChange2 = () => {
    setChecked2(!checked2);
  };
  const [checked3, setChecked3] = React.useState(false);
  const handleChange3 = () => {
    setChecked3(!checked3);
  };
  const [checked4, setChecked4] = React.useState(false);
  const handleChange4 = () => {
    setChecked4(!checked4);
  };

  const [inputValue, setInputValue] = useState('');
  const handleChange5 = (event) => {
    setInputValue(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState('');
  const handleChange6 = (event) => {
    setSelectedOption(event.target.value);
  }

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  const checkAnswerChecked = () => {
      if(checked1 == false && checked2 == false && checked3 == true && checked4 == false)
        return (true);
  }

  const handleSubmit = () => { //answers checked3, backEnd
    const answer= 'SQL';
    
    if(inputValue == answer && checkAnswerChecked() == true && selectedOption == 'backEnd')
      goToWelcomePage();

    setInputValue(''); //Clear the input field after submission
  };
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        <h2>Question 1</h2>
        <p>Who is in charge of developing what you see on the page?</p>
          <div>
            <Checkbox
          label="Database"
          value={checked1}
          onChange={handleChange1}
          />
          </div>
          <div>
            <Checkbox
          label="Back End"
          value={checked2}
          onChange={handleChange2}
          />
          </div>
          <div>
            <Checkbox
          label="Front End"
          value={checked3}
          onChange={handleChange3}
          />
          </div>
          <div>
            <Checkbox
          label="User"
          value={checked4}
          onChange={handleChange4}
          />
          </div>

        <h2>Question 2</h2>
        <p>Who is in charge of Handling the Databases?</p>
        <select value={selectedOption} onChange={handleChange6}>
          <option value='select'> Select an Option</option>
          <option value='backEnd'>Back End</option>
          <option value='frontEnd'>Front End</option>
          <option value='sideEnd'>Side End</option>
          <option value='security'>Security</option>
        </select>

        <h2>Question 3</h2>
        <p>What is the most common language that database uses</p>
        <input
        type="text"
        value={inputValue} //what user has inputted
        onChange= {handleChange5}
        />

        <button onClick={handleSubmit}>Submit Quiz</button>
      </div>
    );
  };
  
  export default QuizPage;
  
  