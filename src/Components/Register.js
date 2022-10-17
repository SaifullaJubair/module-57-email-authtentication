import React from 'react';

const handleRegister = (event) => {
   event.preventDefault()
   const email = event.target.email.value;
   const password = event.target.password.value;
   console.log(email, password);
}
const Register = () => {
   const handleEmailChange = event => {
      console.log(event.target.value);
   }
   const handlePasswordChange = event => {
      console.log(event.target.value);
   }
   return (
      <div>
         <form onSubmit={handleRegister}>
            <input onBlur={handleEmailChange} type="email" name="email" id="userEmail" placeholder='email' />
            <br />
            <input onChange={handlePasswordChange} type="password" name="password" id="userPassword" placeholder='password' />
            <br />
            <button type='submit'>Register</button>
         </form>
      </div>
   );
};

export default Register;