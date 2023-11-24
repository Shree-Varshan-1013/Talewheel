import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcLike, FcFlashOn, FcViewDetails, FcGraduationCap } from "react-icons/fc";
import '../styles/SignIn.css';

const SignIn = () => {

    const navigate = useNavigate();

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
            <div className='hidden lg:flex w-full'>
                <div style={{ width: "100%" }}>
                    <form className='form-box' onSubmit={eventLogin}>
                        <h1 id='login-header'>Welcome Back</h1>
                        <p style={{ marginBottom: "20px" }}>Don't  have an account yet? <a onClick={() => navigate('/sign-up')} className='cursor-pointer'>Sign up for free</a></p>
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
                <div>
                    <div>
                        <img src="/img/logoTale.png" width={500} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;