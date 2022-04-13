import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleEmaialBlur = event => {
    setEmail(event.target.value);
  }
  const handlePassBlur = event => {
    setPass(event.target.value);
  }
  const handleRegisteredChange = (event) => {
    setRegistered(event.target.checked);
  }


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (!/(?=.*[0-9])/.test(pass)) {
      setError('password should contain atleast one number between 0-9');
      return;
    }
    setValidated(true);

    if (registered) {
      signInWithEmailAndPassword(auth, email, pass)
        .then(result => {
          const user = result.user;
          setError('');
          console.log(user);
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPass('');
        })
        .catch(error => {
          console.log(error);
          setError(error.message)
        })
    }
    event.preventDefault(); //for not reload to click at submit
  }
  return (
    <div className="App">
      <div className="registrtion w-50 mx-auto mt-5" >
        <h2 className='text-primary'>Please {registered ? 'Login' : 'Register'}</h2>
        <Form noValidate validated={validated}
          onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmaialBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassBlur} type="password"
              placeholder="Password"
              required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already register" />
          </Form.Group>
          <p className='text-danger'>{error}</p>
          <Button variant="primary"
            type="submit">
            {registered ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>
    </div >
  );
}

export default App;
