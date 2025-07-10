import { signInUser, signUpUser, onUserStateChange, signOutUser } from './firebase/auth.js';

import { useState, useEffect } from 'react';

import AuthView from "./components/AuthView.jsx";
import DashBoard from './components/DashBoard.jsx';
import './styles/index.css';
import './styles/App.css';
import './styles/fonts.css';



export default function App() {

  const [loading, setLoading] = useState(false);
  const [authView, setAuthView] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = onUserStateChange((user) => { 
      setUser(user);
      setLoading(true);
      setAuthView("login");
    });
    
    return () => unsubscribe();
  },[]);


  function switchView(){
    setAuthView((prev) => prev === "login" ? "signup" : "login");
  }

  async function authenticateUser(formData){
    const email = formData.get("email");
    const password = formData.get("password");

    if(authView === "login"){
      // log user in
      const result = await signInUser(email, password);
      if (result.errorCode) {
        console.error(result.errorMessage);
      }
    } else {
      // create user
      const username = formData.get("username");
      const result = await signUpUser(email, password, username);
      if (result.errorCode) {
        console.error(result.errorMessage);
      }
    }
  }

  async function signOut() {
    const result = signOutUser();
    if(result.errorCode) {
      console.log(result.errorMessage);
      // TODO: handle error
      return
    }
    setUser(null);
    setLoading(false)
  }



  return (
  <div className='container'>
    {
      loading && (
        user ? 
        (
          <DashBoard user={user} signOut={signOut}/>
        )
      :
        (
          <AuthView authView={authView} switchView={switchView} authenticateUser={authenticateUser}/>
        )
      )
    }
  </div>
  )
}
