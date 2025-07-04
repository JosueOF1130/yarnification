import { useState } from 'react'
import {yarnBall} from "./assets/images.js"
import './styles/App.css'


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
    <div className='container'>
      <img src={yarnBall} alt="yarn ball" className='yarn-ball-img' />
      <h1>Welcome to Yarnification</h1>
      <h2>{hasAnAccount ? ("Welcome back!") : ("Create an account to get started")}</h2>
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
    <span className='switch-auth'>{hasAnAccount ? ("Don't have an account?") : ("Already have an account?")} <button onClick={switchView}>Sign {hasAnAccount ? ("up") : ("in")}</button></span>
    </div>
  )
}
