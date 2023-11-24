import { useState, useEffect } from 'react';
import { FcLike, FcFlashOn, FcViewDetails, FcGraduationCap } from "react-icons/fc";
import '../styles/SignIn.css';

const SignIn = () => {

    const initialState = {
        email: "",
        password: ""
    }

    const [data, setData] = useState(initialState);
    const [show, isShow] = useState(false);

    const eventLogin = (event) => {
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
            <div className='login--root--box'>
                <div className='login--root--box--left'>
                    <div>
                        <img src="/img/welcome.png" width={100} id="welcome-logo"></img>
                        <form className='form-box' onSubmit={eventLogin}>
                            <h1 id='login-header'>Welcome Back</h1>
                            <p style={{ marginBottom: "20px" }}>Don't  have an account yet? <a href="#">Sign up for free</a></p>
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
                                <div style={{ marginBottom: "20px" }}>
                                    <a href="#">Forget password</a>
                                </div>
                            </div>
                            <button type="submit" className='button-27'>Sign In</button>
                        </form>
                    </div>
                </div>
                <div className='login--root--box--right'>
                    <div className='login--root--box--right--logos'>
                        <img src="/img/logo.png" width={300}></img>
                        <img src="/img/s1.gif" width={90}></img>
                    </div>
                    <div className='label-container'>
                        <div className="login-labels">
                            <FcFlashOn size={50} />
                            <h1 className='login-label-text'>24/7 Support</h1>
                        </div>
                        <div className="login-labels">
                            <FcGraduationCap size={50} />
                            <h1 className='login-label-text'>Effective Guidance</h1>
                        </div>
                        <div className="login-labels">
                            <FcLike size={50} />
                            <h1 className='login-label-text'>Happy Users</h1>
                        </div>
                        <div className="login-labels">
                            <FcViewDetails size={50} />
                            <h1 className='login-label-text'>Instant Resume</h1>
                        </div>
                        <div className="login-labels">
                            <img src='/img/chatbot.png' width={75} />
                        </div>
                    </div>
                    <div className='bottomright'>
                        <h1>Career Guidance Bot</h1>
                        <p>© 2021 All Rights Reserved. Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;