import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBarStyles.css';
import { auth, provider, red } from '../firebase';

const Navbar = () => {
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



  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  //window.addEventListener('scroll', changeColor);

  return (
<>
<button onClick={googleP}>Google Login</button>

</>

    // <div className={color ? 'header header-bg' : 'header'}>
    //   <Link to='/'>
    //     <h1>Insightfully Fit</h1>
    //   </Link>
    //   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //     <li>
    //       <Link to='/'>Home</Link>
    //     </li>
    //     <li>
    //       <Link to='/about'>About</Link>
    //     </li>
    //     <li>
    //       <Link to='/calculators'>Calculators</Link>
    //     </li>
    //     <li>
    //       <Link to='/login'>Login</Link>
    //     </li>
    //     <li>
    //       <Link to='/register'>Register</Link>
    //     </li>
    //   </ul>
    //   <div className='hamburger' onClick={handleClick}>
    //     {click ? (
    //       <FaTimes size={20} style={{ color: '#fff' }} />
    //     ) : (
    //       <FaBars size={20} style={{ color: '#fff' }} />
    //     )}
    //   </div>

    // 
    // </div>
  );
};

export default Navbar;
