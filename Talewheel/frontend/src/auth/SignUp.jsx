import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FcLike, FcFlashOn, FcViewDetails, FcGraduationCap } from "react-icons/fc";
import '../styles/SignIn.css';

const SignUp = () => {

  const navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
    password: "",
    confimpassword: ""
  }

  const [data, setData] = useState(initialState);
  const [show, isShow] = useState(false);

  const eventSignUp = (event) => {
    event.preventDefault();
    console.log(data);
  }

  const eventChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <div className='hidden md:flex w-full'>
        <div style={{ width: "100%", marginTop: "50px", display: "flex", justifyContent: "center" }}>
          <form className='form-box' onSubmit={eventSignUp}>
            <img src="/img/logoTale.png" width={400} />
            <h1 id='login-header'>Sign Up</h1>
            <p style={{ marginBottom: "20px" }}>Already have an account ? <a onClick={() => navigate('/sign-in')} className='cursor-pointer'>Sign in</a></p>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Username</label>
              </div>
              <input type="text" value={data.username} name="username" placeholder="Username" onChange={eventChange} className='form-input-box' />
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Email</label>
              </div>
              <input type="text" value={data.email} name="email" placeholder="Email" onChange={eventChange} className='form-input-box' />
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Password</label>
              </div>
              <input type="password" value={data.password} name="password" placeholder="Password" onChange={eventChange} className='form-input-box' />
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Confirm Password</label>
              </div>
              <input type="password" value={data.confimpassword} name="confimpassword" placeholder="Confirm Password" onChange={eventChange} className='form-input-box' />
            </div>
            <button type="submit" className='button-27'>Sign Up</button>
          </form>
        </div>
        <div className='logo-box'>
          <img src="/img/cloud.png" width={350} />
          <span className='cloud-text-signup'>
            <Typewriter
              options={{
                strings: ['Hi Welcome', 'To Talewheel', 'Sign Up To', 'Get Started'],
                autoStart: true,
                loop: true,
                cursor: '🪄',
              }} />
          </span>
          <img src="/img/fairy.png" width={300} />
        </div>
      </div>
      
      <div className='md:hidden block w-full'>
        <div style={{ padding: "30px", display: "block", margin: "0 auto" }}>
          <form className='form-box-mobile' onSubmit={eventSignUp}>
            <img src="/img/logoTale.png" width={400} />
            <h1 id='login-header'>Sign Up</h1>
            <p style={{ marginBottom: "20px" }}>Already have an account? <a onClick={() => navigate('/sign-in')} className='cursor-pointer'>Sign in</a></p>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Username</label>
              </div>
              <input type="text" value={data.username} name="email" placeholder="Username" onChange={eventChange} className='form-input-box' />
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Email</label>
              </div>
              <input type="text" value={data.email} name="email" placeholder="Email" onChange={eventChange} className='form-input-box' />
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Password</label>
              </div>
              <input type="password" value={data.password} name="password" placeholder="Password" onChange={eventChange} className='form-input-box' />
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Confirm Password</label>
              </div>
              <input type="password" value={data.confimpassword} name="confirmpassword" placeholder="Confirm Password" onChange={eventChange} className='form-input-box' />
            </div>
            <button type="submit" className='button-27'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;