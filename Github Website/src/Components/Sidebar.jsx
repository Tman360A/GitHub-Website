import "../Css/Componets/Sidebar.css"

function Sidebar() {
    return(
            <div className="Sidebar">
                <a href="/">The Website</a>
                <a href="/" className="sub">Home</a>
                <a href="/info" className="sub">Info</a>
            </div>
    );
}

export default Sidebar