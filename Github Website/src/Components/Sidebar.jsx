import "../Css/Componets/Sidebar.css"

function Sidebar() {
    return(
        <div className="Sidebar">
            <a>The Website</a>
            <a className="sub">Home</a>
            <a className="sub">Login</a>
            <a className="sub">SignUp</a>
        </div>
    );
}

export default Sidebar