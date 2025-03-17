import { useState } from 'react';
import '../index.css';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  const onValidate = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName('');
      setUserColor('green');
    } else {
      setErrorUserName('Users must have 8 characters long!');
      setUserColor('red');
    }

    if (email.includes('@gmail.com')) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('Users email must have @gmail.com!');
      setEmailColor('red');
    }

    if (password.length > 8) {
      setPasswordColor('green');
      setErrorPassword('');
    } else {
      setPasswordColor('red');
      setErrorPassword('Users password must have 8 long characters!!');
    }

    if (password !== '' && password === confirmPassword) {
      setConfirmPasswordColor('green');
      setErrorConfirmPassword('');
    } else {
      setConfirmPasswordColor('red');
      setErrorConfirmPassword("User password did'nt match");
    }

    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            name="name"
            value={userName}
            placeholder="Name"
            style={{ borderColor: userColor }}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="error">{errorUserName}</p>

          <input
            type="=email"
            name="email"
            value={email}
            placeholder="Email"
            style={{ borderColor: emailColor }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            value={password}
            placeholder="Password"
            name="password"
            style={{
              borderColor: passwordColor,
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm password"
            name="password"
            style={{
              borderColor: confirmPasswordColor,
            }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button type="submit" className="submit-btn" onClick={onValidate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
