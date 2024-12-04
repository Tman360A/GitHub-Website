import "../Css/Componets/Sidebar.css"

function Sidebar() {
    return(
            <div className="Sidebar">
                <a href="/">The Website</a>
                <a href="/login" className="sub">Login</a>
                <a href="/sign-up" className="sub">Sign Up</a>
                <a href="/API" className="sub">API</a>    
            </div>
    );
}

export default Sidebar