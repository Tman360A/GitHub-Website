import "../Css/Componets/Sidebar.css"

function Sidebar() {
    return(
            <div className="Sidebar">
                <a href="/">The Website</a>
                <a href="/login" className="sub">Login</a>
            </div>
    );
}

export default Sidebar