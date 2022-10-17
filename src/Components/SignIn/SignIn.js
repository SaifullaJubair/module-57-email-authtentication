import React from 'react';
import app from '../../firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInEmail from './SignInEmail';


const auth = getAuth(app)

const SignIn = () => {
   const [user, setUser] = useState({})
   const googleProvider = new GoogleAuthProvider()
   const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
         .then(res => {
            const user = res.user
            setUser(user)
         })
         .catch(error => {
            console.error('error: ', error);
         })
   }
   const handleSignOut = () => {
      signOut(auth)
         .then(() => {
            setUser({})
         })
         .catch(() => {
            setUser({})
         })
   }

   return (
      <div className='p-3 mx-auto border  my-5 w-75 rounded'>

         {
            user.uid &&
            <div className='text-success p-2'>
               <h3>User Name:{user.displayName}</h3>
               <p>Email:{user.email} </p>
               <img src={user.photoURL} alt="" />
            </div>
         }
         {
            user.uid ?
               <button className='btn btn-primary mb-2' onClick={handleSignOut}>G SignOut</button>
               :
               <div>
                  <h3 className='text-success'>Please Login:</h3>
                  <SignInEmail></SignInEmail>
                  <div className='d-flex justify-content-center align-items-center p-3'>
                     <button className='btn btn-primary ms-2' onClick={handleGoogleSignIn}>G-SignIn</button>
                  </div>

                  <h6><small>Don't have any account?
                     <Link to='/register'>Register</Link> Now</small>
                  </h6>
               </div>

         }
      </div>
   );
};

export default SignIn;