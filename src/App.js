import './App.css';
import React, {useState} from 'react'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    emailFormat: false
  });


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();

      const emailRegex = /^\S+@\S+\.\S+$/;
      
      if (firstName.trim() === '') {
        setError(prevState => ({ ...prevState, firstName: true }));
      } else {
        setError(prevState => ({ ...prevState, firstName: false }));
      }
    
      if (lastName.trim() === '') {
        setError(prevState => ({ ...prevState, lastName: true }));
      } else {
        setError(prevState => ({ ...prevState, lastName: false }));
      }
    
      if (email.trim() === '') {
        setError(prevState => ({ ...prevState, email: true }));
      } else if (!emailRegex.test(email)) {
        setError(prevState => ({ ...prevState, emailFormat: true }));
      } else {
        setError(prevState => ({ ...prevState, email: false, emailFormat: false }));
      }
    
      if (password.trim() === '') {
        setError(prevState => ({ ...prevState, password: true }));
      } else {
        setError(prevState => ({ ...prevState, password: false }));
      }
  };

  return (
    <div className="App">
     <div className='container'>
      <div className='firstHalf'>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>

      </div>
      <div className='secondHalf'>
        <div className='heading'>
            <p><span className='boldText'>Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <div className='input'>
          <input className = 'field'  value = {firstName} placeholder='First Name' onChange={handleFirstNameChange}></input>
          {error.firstName && <p className='error'>First Name is empty.</p>}
         
          <input className = 'field' value = {lastName} placeholder='Last Name' onChange={handleLastNameChange}></input>
          {error.lastName && <p className='error'>Last Name is empty.</p>}

          <input className = 'field' value = {email}placeholder='E-mail' onChange={handleEmailChange}></input>
          {error.email && <p className='error'>E-mail is empty or incorrect format.</p>}
          <input className = 'field' value = {password} placeholder='Password' onChange={handlePasswordChange}></input>
          {error.password && <p className='error'>Password is empty.</p>}

          <button onClick = {handleSubmit}>CLAIM YOUR FREE TRIAL</button>
          <p className='footnote'>By clicking this button, you are agreeing to our <span className='terms'>Terms and Services</span> </p>
        </div>

      </div>

     </div>
    </div>
  );
}

export default App;
