import React, { useState } from 'react';
import myjumia from '../../images/myjumia-top-logo.png';
import { Link } from 'react-router-dom';
//import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './newaccount.css';
import {useEmail} from '../../context/email';

const NewAccount = () => {
  const [inputs, setInputs] = useState({
    password1: '',
    password2: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //const { password1, password2 } = inputs;
  };

  const {email}=useEmail();

  return (
    <div className='login_master_container'>
      <div className='login_text_container'>
        <div>
          <img src={myjumia} alt='Jumia Logo' height={55} width={55} />
        </div>
        <div>
          <h2>Create your account</h2>
        </div>
        <div>
          <p>
            Let's get started by creating your account.
            To keep your account safe, we need a strong password
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='password_input'>
          <input 
          type='email' 
          name='email' 
          placeholder={email} 
          readOnly='true' 
          className='password_input_text'
          />
          <Link to="/" style={{paddingRight:10,fontSize:13,textDecoration:'none',color:'orange'}}>Edit</Link>
        </div>

        <div className='password_input'>
          <input
            type='password'
            name='password1'
            placeholder='Password'
            required
            value={inputs.password1}
            onChange={handleChange}
            className='password_input_text'  
          />
        </div>
        <div className='password_input'>
          <input
            type='password'
            name='password2'
            placeholder='Confirm Password'
            required
            value={inputs.password2}
            onChange={handleChange}
            className='password_input_text'
          />
        </div>
        <div className='continue_button'>
          <Link to='/'>
            <button type='submit' className='login_button_continue' style={{cursor:'pointer'}}>Continue</button>
          </Link>
        </div>
      </form>
      <div className='login_footer_container'>
        <div>
          <p>
            For further support, you may visit the Help Center or contact our{' '}
            <span>customer service team.</span>
          </p>
        </div>
        <div className='login_footer_text'>
          <h5>
            JUMIA <img src={myjumia} alt='bottomLogo' height={16} width={16} />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
