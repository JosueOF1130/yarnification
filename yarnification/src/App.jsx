import { useState } from 'react'
import {yarnBall} from "./assets/images.js"
import './App.css'

export default function App() {

  // if user is not signed in
    //show user auth page
      //show login page for users
      //show signup page for new users
  // else if user is signed in then show the app based on the users credentials

  const [hasAnAccount, setHasAnAccount] = useState(false)

  function switchView(){
    setHasAnAccount(prev => !prev);
  }

  function authenticateUser(formData){
    if(hasAnAccount){
      // sign in
    } else {
      // create user
      // add user to db
    }
  }


  return (
    <>
    <img src={yarnBall} alt="yarn ball" />
      <h1>Welcome to Yarnification</h1>
      <h2>Create an account to get started</h2>
      <form className='auth-form' action="{authenticateUser}">
            <input 
              type="email"
              placeholder="e.g. johndoe@email.com"
              aria-label="Enter email"
              name="email"
            />
            <input 
              type="password" 
              aria-label="Enter Password"
              placeholder='password'
              name="password"
            />
            <button>{hasAnAccount ? "Sign in" : "Sign up"}</button>
      </form>
      {
        hasAnAccount ? 
      (
        <span>Don't have account? <button onClick={switchView}>Sign up</button></span>
      ) 
      : 
      (
        <span>Already have account? <button onClick={switchView}>Sign in</button></span>
      )
      }
    </>
  )
}
