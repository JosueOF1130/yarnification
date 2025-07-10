import {yarnBall} from "../assets/images.js";
import '../styles/authview.css';

export default function AuthView({authView, switchView, authenticateUser}) {

    return (
        <>
            <img src={yarnBall} alt="yarn ball" className='yarn-ball-img' />
            <h2>Welcome to</h2>
            <h1 className="harlow-solid">Yarnification</h1>
            <form className='auth-form' action={authenticateUser}>
                <h2>{authView === "login" ? ("Welcome back!") : ("Create an account to get started")}</h2>
                {
                    authView === "signup" && (
                    <input 
                    type="text"
                    placeholder="Fattboii"
                    aria-label="Enter username"
                    name="username"
                    />
                    )
                }
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
                    <button>{authView === "login" ? "Sign in" : "Sign up"}</button>
                </form>
            <span className='switch-auth'>{authView === "login" ? ("Don't have an account?") : ("Already have an account?")} <button onClick={switchView}>Sign {authView === "login" ? ("up") : ("in")}</button></span>
        </>
    );
}