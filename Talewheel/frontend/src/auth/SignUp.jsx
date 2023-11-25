import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { useFormik } from 'formik';
import '../styles/SignIn.css';
import { signUpSchema } from '../../schemas/signUp';
import userService from '../../services/userService';
import Swal from 'sweetalert2';

const SignUp = () => {

  const navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: initialState,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      eventSignUp();
      action.resetForm();
    }
  });

  const eventSignUp = async () => {
    try {
      const response = await userService.saveUser(values);
      console.log(response);
      var token = response.data.accessToken;
      var user_email = response.data.email;
      console.log(response.data);

      let timerInterval;
      Swal.fire({
        title: "Successfully Registered !",
        html: "Redirecting in <b></b> milliseconds.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });

      setTimeout(() => {
        // dispatch(addUser(user_email));
        // dispatch(addColor(color));
        // dispatch(addToken(token));
        navigate("/sign-in");
      }, 3000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong !",
      });
    }
  }

  return (
    <>
      <div className='hidden md:flex w-full'>
        <div style={{ width: "100%", marginTop: "50px", display: "flex", justifyContent: "center" }}>
          <form className='form-box' onSubmit={handleSubmit}>
            <img src="/img/logoTale.png" width={400} />
            <h1 id='login-header'>Sign Up</h1>
            <p style={{ marginBottom: "20px" }}>Already have an account ? <a onClick={() => navigate('/sign-in')} className='cursor-pointer'>Sign in</a></p>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Username</label>
              </div>
              <input type="text"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                name="username"
                placeholder="Username"
                className='form-input-box'
              />
              {errors.username && touched.username ? (
                <p style={{ color: "red" }}>{errors.username}</p>
              ) : null}
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Email</label>
              </div>
              <input
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                placeholder="Email"
                className='form-input-box'
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red" }}>{errors.email}</p>
              ) : null}
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Password</label>
              </div>
              <input
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                placeholder="Password"
                className='form-input-box'
              />
              {errors.password && touched.password ? (
                <p style={{ color: "red" }}>{errors.password}</p>
              ) : null}
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Confirm Password</label>
              </div>
              <input
                type="password"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                name="confirmpassword"
                placeholder="Confirm Password"
                className='form-input-box'
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <p style={{ color: "red" }}>{errors.confirmpassword}</p>
              ) : null}
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
          <form className='form-box-mobile' onSubmit={handleSubmit}>
            <img src="/img/logoTale.png" width={400} />
            <h1 id='login-header'>Sign Up</h1>
            <p style={{ marginBottom: "20px" }}>Already have an account? <a onClick={() => navigate('/sign-in')} className='cursor-pointer'>Sign in</a></p>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Username</label>
              </div>
              <input type="text"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                name="username"
                placeholder="Username"
                className='form-input-box'
              />
              {errors.username && touched.username ? (
                <p style={{ color: "red" }}>{errors.username}</p>
              ) : null}
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Email</label>
              </div>
              <input type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                placeholder="Email"
                className='form-input-box'
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red" }}>{errors.email}</p>
              ) : null}
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Password</label>
              </div>
              <input
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                placeholder="Password"
                className='form-input-box'
              />
              {errors.password && touched.password ? (
                <p style={{ color: "red" }}>{errors.password}</p>
              ) : null}
            </div>
            <div className='form-input-div'>
              <div className='form-label-box'>
                <label className='form-label'>Confirm Password</label>
              </div>
              <input
                type="password"
                value={values.confimpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                name="confirmpassword"
                placeholder="Confirm Password"
                className='form-input-box'
              />
              {errors.confimpassword && touched.confimpassword ? (
                <p style={{ color: "red" }}>{errors.confimpassword}</p>
              ) : null}
            </div>
            <button type="submit" className='button-27'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;