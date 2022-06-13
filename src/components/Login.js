import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './LoginStyles.css';
import { auth, provider, red } from '../firebase';




//Google login
const googleP =  (e) =>{
e.preventDefault();
red(auth, provider)
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.log(error.message);
});


};




const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  };

  return (
    <>
  <button onClick={googleP}>Google Login</button>


      {/* {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href='/home'>Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'>
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className='line'>
              {/*put router link here*/}
              {/* <a href='/register'>Sign Up</a>
            </span>
          </p>
        </section>
      )} */} 
    </>
  );
};

export default Login;
