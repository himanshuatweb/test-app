import { useState } from 'react';
import axios from 'axios';
import './app.css';
const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(`http://localhost:5000/user`, formData);
      console.log(res);
      window.alert('User Added to Database');
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
    } catch (error) {
      window.alert(error.response.data);
      console.log('Error name', error);
    }
  };

  return (
    <div className='main'>
      <h1>Sending Data To Backend(Node.js API) Using React.js</h1>

      <form onSubmit={handleSubmit}>
        <h2>Enter Your Details</h2>
        <div className='inputFields'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>

        <div className='inputFields'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div className='inputFields'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className='inputFields'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};
export default App;
