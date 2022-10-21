import React, { useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { forgetPassword, LoginAction, SignUpAction } from '../redux/action/auth.action';
import { useDispatch } from 'react-redux';

function Login(props) {



    const [userType, setUserType] = useState('Login')
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch();

    const handleLogin = (values) => {
        // alert(JSON.stringify(values, null, 2));
        sessionStorage.setItem("user", "1234567")       

    }

    const handleSignup = (values) => {

        const data = JSON.parse(localStorage.getItem("users"));

        console.log(data);

        if (data === null) {
            localStorage.setItem("users", JSON.stringify([values]));
        } else {
            data.push(values);
            localStorage.setItem("users", JSON.stringify(data));
        }

        data.push(values);
        console.log(data);
        localStorage.setItem("users", JSON.stringify(values));
        alert(JSON.stringify(values, null, 2));
        dispatch(LoginAction(values))



    }
    const handlepassword = (values) => {    
        // alert(JSON.stringify(values.email));
        dispatch(forgetPassword(values))
    }
    let Login = {
        email: yup.string().required('Enter Your Email').email('Enter Valid Email'),
        password: yup.string().required('Please Enter Password'),
    }

    let Signup = {

        email: yup.string().required('Enter Your Email').email('Enter Valid Email'),
        password: yup.string().required('Please Enter Password'),
    }
    let Password = {
        email: yup.string().required('Enter Your Email').email('Enter Valid Email')
    }

    // const handlepassword = (values) => {
    //     // alert(JSON.stringify(values.email));
    //     dispatch(forgetPassword(values))
    // } 

    let schema, initVal;


    if (userType === "Login" && !reset) {
        schema = yup.object().shape(Login);
        initVal = {
            email: '',
            password: ''
        }
    } else if (userType === "Signup" && !reset) {
        schema = yup.object().shape(Signup);
        initVal = {

            email: '',
            password: ''
        }
    } else if (reset) {
        console.log(reset);
        schema = yup.object().shape(Password);
        initVal = {
            email: ''
        }
    }

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (userType === "Login" && !reset) {
                handleLogin(values)
                dispatch(LoginAction(values))
                // console.log("login");
            } else if (userType === "Signup" && !reset) {
                dispatch(SignUpAction(values))
                handleSignup(values)
                // console.log("sign up")
            }
            else if (reset) {
                handlepassword(values)

                // console.log("reset");
            }
            resetForm();

        }
    })


    return (
        <>
            <div>
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                {
                                    reset ?
                                        <h2 className='center'>Reset Password</h2> :
                                        userType === 'Login' ? <h2 className='center'>Login</h2> : <h2 className='center'>Signup</h2>
                                }
                                {/* <h1>Login/Register</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="index.html">Home<span className="lnr lnr-arrow-right" /></a>
                                    <a href="category.html">Login/Register</a>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Area */}
                {/*================Login Box Area =================*/}



                <section className="login_box_area section_gap">
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>

                            <div className="container">

                                <div className="row">
                                    <div className='row'>
                                        <div className="col-lg-6">
                                            <div className="login_box_img">
                                                <img className="img-fluid" src="img/login.jpg" alt />
                                                <div className="hover">
                                                    <h4>New to our website?</h4>
                                                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                                    <a className="primary-btn" href="registration.html">Create an Account</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="login_form_inner">
                                                <h3>
                                                    <h2 className='center'>Login</h2>
                                                </h3>
                                                <form className="row login_form">
                                                    {

                                                        userType === 'Login' ? null
                                                            :
                                                            <div className="col-md-12 form-group">
                                                                <input
                                                                    type="name"
                                                                    className="form-control"
                                                                    id="name"
                                                                    name="name"
                                                                    placeholder="Enter Your Name"
                                                                    onBlur={formik.handleBlur}
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.name}
                                                                />

                                                                {
                                                                    formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                                                }

                                                            </div>
                                                    }
                                                    <div className="col-md-12 form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Enter Your Email"
                                                            onBlur={formik.handleBlur}
                                                            onChange={formik.handleChange}
                                                            value={formik.values.email}
                                                        />
                                                        {
                                                            formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                                        }
                                                    </div>
                                                    {
                                                        reset === true ?
                                                            null :
                                                            <div className="col-md-12 form-group  d-block">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    name="password"
                                                                    id="password"
                                                                    placeholder="Enter Your Password"
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.password}
                                                                    onBlur={formik.handleBlur}
                                                                />
                                                                {
                                                                    formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : ''
                                                                }


                                                            </div>
                                                    }
                                                    <div className=''>
                                                        {
                                                            reset ?
                                                                <div className="text-center">
                                                                    <button type="submit" className='btn btn-dark  ml-6 mt-4'>Forgot password</button>
                                                                </div>

                                                                :
                                                                userType === 'Login' ?
                                                                    <div className="text-center">
                                                                        <button type="submit" className='btn btn-dark ml-6 mt-4' onClick={()=>handleLogin()}>Login</button>
                                                                    </div> :
                                                                    <div className="text-center">
                                                                        <button type="submit" className='btn btn-dark  ml-6 mt-4'>signup</button>
                                                                    </div>
                                                        }
                                                    </div>

                                                    {
                                                        reset === true ?
                                                            <div className='text-center mt-4 ml-7'>
                                                                <span>already have an account ?</span>
                                                                <a onClick={() => setReset(true)}>Login</a>
                                                            </div> :
                                                            userType === 'Login' ?
                                                                <div className='text-center mt-4 ml-7'>
                                                                    <span>create a New account ?</span>
                                                                    <a onClick={() => { setUserType('Signup') }} >signup</a> <br></br>
                                                                    <a className='mt-3' onClick={() => { setReset(true) }}>Forget password</a>
                                                                </div> :

                                                                <div className='ml-7 mt-4'>
                                                                    <span>already have an account ?</span>
                                                                    
                                                                    <a onClick={() => { setUserType('Login') }}>Login</a>
                                                                </div>
                                                    }
                                                    {/* <div className="col-md-12 form-group">
                                                    <div className="creat_account">
                                                        <input type="checkbox" id="f-option2" name="selector" />
                                                         <label htmlFor="f-option2">Keep me logged in</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <a type="submit" value="submit" className="primary-btn" onClick={() => { setUserType('Login') }}>Log In</a>

                                                    <a href="#">Forgot Password?</a>
                                                </div> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </section>
                {/*================End Login Box Area =================*/}
            </div>


        </>
    );
}

export default Login;