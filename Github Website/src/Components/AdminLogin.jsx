import { useEffect, useRef } from "react";
import "../Css/Componets/AdminLogin.css"

function AdminLogin({changeVisiblityFunction}) {

    const userName = useRef();
    const password = useRef();

    const wantedUserName = "Tman360";
    const wantedPassword = "883gtr25!";

    useEffect(() => {
        function handleEnterPress(event) {
          if (event.key === 'Enter') {
            tryLogin();
          }
        }
    
        document.addEventListener("keydown", handleEnterPress);

        return () => {
          document.removeEventListener("keydown", handleEnterPress);
        };
      }, []);

    function tryLogin() {

        if ( userName.current.value == wantedUserName && password.current.value == wantedPassword) {
            new changeVisiblityFunction;
        } else {
            alert("Invalid credentials");
        }
    }
    return(
        <div className="AdminLogin">
            <h2>Admin Login</h2>
            <input type="text" ref={userName} placeholder="User Name" />
            <input type="password" ref={password} placeholder="Password" />
            <button onClick={tryLogin}>Login</button>
        </div>
    );
}

export default AdminLogin