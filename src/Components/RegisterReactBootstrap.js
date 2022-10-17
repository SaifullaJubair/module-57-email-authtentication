import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
   const [passwordError, setPasswordError] = useState('')
   const [success, setSuccess] = useState(false)


   const handleRegister = (event) => {
      setSuccess(false)
      event.preventDefault()
      const form = event.target
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value
      console.log(name, email, password);
      if (!/(?=.*?[a-z])/.test(password)) {
         setPasswordError('at list one lower case')
         return
      }
      if (!/(?=.*?[A-Z])/.test(password)) {
         setPasswordError('Please Provide at lest 1 character uppercase ')
         return
      }
      if (!/(?=.*?[0-9])/.test(password)) {
         setPasswordError('at list one digit')
         return
      }
      // if (!/(?=.*?[#!@$%^&*])/.test(password)) {
      //    setPasswordError('At list one special character')
      //    return
      // }
      if (password.length < 4) {
         setPasswordError('at list 8 character')
         return
      }
      setPasswordError('')
      createUserWithEmailAndPassword(auth, email, password)
         .then(res => {
            const user = res.user
            console.log(user)
            setSuccess(true)
            form.reset()
            verifyEmail()
            updateUserName(name)

         })
         .catch(error => {
            console.error('error: ', error);
            setPasswordError(error.message)
         })
   }

   const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
         .then(() => {
            alert('check your email andy verify.')
         })
   }
   const updateUserName = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name
      })
         .then(() => {
            console.log('display name updated')
         })
         .catch(error => {
            console.error('error:', error);
         })
   }
   return (
      <div className='justify-content-center align-items-center mx-auto w-75 border rounded m-5 p-3'>

         <h3 className='text-primary'>Please Register</h3>
         <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label>Your Name</Form.Label>
               <Form.Control type="text" name='name' placeholder="Input Your Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name='password' placeholder="Input Password" required />
            </Form.Group>
            <p className="text-danger">{passwordError}</p>
            {
               success && <p className='text-success'>User created successfully</p>
            }
            <Button variant="primary" type="submit">
               Register
            </Button>
         </Form>

         <h5 className='mt-2'>Already have an account ? <Link to='/signin'>SignIn</Link> </h5>

      </div>
   );
};

export default RegisterReactBootstrap;