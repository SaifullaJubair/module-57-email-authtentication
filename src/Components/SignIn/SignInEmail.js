import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const SignInEmail = () => {
   const [success, setSuccess] = useState(false)
   const [userEmail, setUserEmail] = useState('');
   const handleSubmit = (event) => {
      setSuccess(false);

      event.preventDefault();
      const form = event.target
      const email = form.email.value
      const password = form.password.value
      console.log(email, password)

      signInWithEmailAndPassword(auth, email, password)
         .then(res => {
            const user = res.user
            console.log(user)
            setSuccess(true)
            form.reset()
            alert('Successfully login')
         })
         .catch(error => {
            console.error('error: ', error);
         })
   }
   const handleEmailBlur = (event) => {
      const email = event.target.value
      setUserEmail(email)
      console.log(email);
   }
   const handleForgetPassword = () => {
      if (!userEmail) {
         alert("Please enter your email address")
         return
      }
      sendPasswordResetEmail(auth, userEmail)
         .then(() => {
            alert('Reset password Check your email')
         })
         .catch(error => {
            console.error('error: ', error);
         })
   }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="mb-3" >
               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
               <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" name='email' required placeholder='Your Email' />
            </div>

            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder='Your Password' required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
         {success && <p className='text-success'>
            Successfully SignIn
         </p>}
         <p><small>Forget password?<button onClick={handleForgetPassword} type="button" className="btn btn-link">ResetPassword</button></small></p>
      </div>
   );
};

export default SignInEmail;