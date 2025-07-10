
import { child, get, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {database} from "../firebase/firebase.js";
import {useEffect, useState} from "react";

import TabBar from "./TabBar.jsx";
import CurrentView from "./CurrentView.jsx";

export default function DashBoard({user, signOut}){
    
    
    const [username, setUsername] = useState(null);

    async function getUsername(){
        const uid = user.uid;
        const userRef = ref(database, `users/${uid}/username`);
        try {
            const snapshot = await get(userRef);
            if(snapshot.exists){
                setUsername(snapshot.val());
            }
        } catch (error) {   
            // TODO: handle error
            console.log(error.message);
        }
    }

    const Views = {
        HOME: "home",
        SETTINGS: "settings"
    };

    const [currentView, setCurrentView] = useState(Views.HOME);

    function changeView(view) {
        switch(view){
            case Views.HOME:
                setCurrentView(Views.HOME);
                break;
            case Views.SETTINGS:
                setCurrentView(Views.SETTINGS);
                break;
        }
    }


    useEffect(()=>{
        getUsername();
    },[]);

    return (
        <>
            
            <h1>🎉 Welcome back, {username}!</h1>

            <CurrentView view={currentView} />

            <button onClick={signOut}>Sign Out</button>
            <TabBar currentView={currentView} changeView={changeView}/>
        </>
    );
}