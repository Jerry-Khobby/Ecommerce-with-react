import React,{useState}from 'react'
import './Login.css';
import myjumia from '../../images/myjumia-top-logo.png';
import facebook from '../../images/facebook.png';
import { Link } from 'react-router-dom';
import {useEmail} from '../../context/email';


const Login = () => {

    const [inputValue,setInputValue]=useState('');
    const {setEmail}=useEmail();

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
        setEmail(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return ( 
        <div className='login_master_container'>
            <div className='login_text_container'>
                <div>
                    <img src={myjumia} alt="Jumia Logo" height={55} width={55}/>
                    </div>
                <div>
                    <h2>Welcome to Jumia</h2>
                    </div>
                <div>
                    <p>Type your e-mail or phone number to log in or create a Jumia <span>account.</span></p>
                    </div>
            </div>
            <form  onSubmit={handleSubmit}>
            <div className='login_input_container'>
                <input type="email" name="email or number"  value={inputValue} required className='login_input' onChange={handleInputChange}/>
            </div>
            <div>
                <Link to="/signup">
                <button  className='login_button_continue' style={{cursor:'pointer'}}>Continue</button>
                </Link>
                </div>
            <div>
                <button className='login_button_facebook' type="submit"><img src={facebook} alt="facebook logo" height={16} width={16}/>Log in with Facebook </button>
                </div>
                </form>
            <div className='login_footer_container'>
                <div>
                    <p>For further support, you may visit the Help Center or contact our                     <span>customer service team.</span></p>

                </div>
                <div className='login_footer_text'>
                   <h5>JUMIA <img src={myjumia} alt="bottomLogo" height={16} width={16}/></h5> 
                </div>
            </div>
        </div>
     );
}
 
export default Login;
