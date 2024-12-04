import { useRef, useState } from "react";
import "../Css/Componets/LoginBox.css";

function LoginBox() {
    
    const userName = useRef(null);
    const password = useRef(null);
    const status = useRef(null);

    const [text, setText] = useState("Insert User Name and password");
    const [textColor, setTextColor] = useState(null);


    async function getUser() {
        try {
            const httpRequest = "http://localhost:1111/api/" + userName.current.value;
            const account = await fetch(httpRequest);
            const userData = await account.json();
            setText(userData.password);
            setTextColor("hsl(120, 75%, 50%)")
        } catch {
            setText("Invalid User Name")
            setTextColor("hsl(0, 100%, 50%)")
        }
    }

    return(
        <ul className="loginBox">
            <input ref={userName} placeholder="User Name"/>
            <input ref={password} placeholder="Password" />
            <button onClick={getUser}>Submit</button>
            <p style={{ color: textColor }} ref={status}>{text}</p>
        </ul>
    );
}

export default LoginBox