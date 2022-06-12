import React from "react";
import './RegisterStyle.css';


function Register() {
  return (
    <div className="container">
     <form>
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />

    <label for="uName"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uName" id="uName" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
    <hr />


    <button type="submit" class="registerbtn" href='./Login'>Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="./Login">Sign in</a>.</p>
  </div>
</form>

    </div>
  );
}

export default Register;