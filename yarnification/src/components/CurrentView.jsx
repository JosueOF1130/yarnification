
export default function CurrentView({view}) {
    return (
        <div>
            
            {view === "home" && <p>Home Page</p>}
            {view === "settings" && <p>Settings Page</p>}
        
        </div>
    );
}