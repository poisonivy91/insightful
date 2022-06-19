import React from 'react'
import {} from 'react-router-dom'
import './VideoStyles.css'
import { auth, provider } from '../firebase';
import{signInWithPopup, signOut} from "firebase/auth"
import workoutVideo from '../assets/workout.mp4'
import { useAuthState } from 'react-firebase-hooks/auth';


const Video = () => {

  const [user, loading, error] = useAuthState(auth);

  
//Google login
const googleP =  (e) =>{
  e.preventDefault();
  signInWithPopup(auth, provider, loading, error)
  .then((result)=>{
    console.log(result);
    console.log("I am logged!");
  })
  .catch((error)=>{
    console.log(error.message);
  });
};

const logOut = () =>{
  signOut(auth).then(() =>{
    console.log("I logged Out!");
  }).catch((error) =>{
    console.log(error.message);
  })
}

  return (
    <div className='hero'>
      
        <video autoPlay loop muted id='video'>
            <source src={workoutVideo} type='video/mp4' />
        </video>
        <div className='content'>


        <img
            src={user?.photoURL}
            />

            <h1>Welcome</h1>

              <h1>{user?.displayName}</h1>

            <p>Train With Insight</p>

            <p> & </p>
            
            <p>Empower Your Fitness Journey </p>

            <button onClick={googleP}>Google Login</button>
            <button onClick={logOut}>Sign Out</button>
            
           
            {/* {<div>
                <Link to='/register' className='btn'>Register</Link>

                <Link to='/login' className='btn btn-light'>Launch</Link>
            </div> } */}
        </div>
       
    </div>
  )
}

export default Video