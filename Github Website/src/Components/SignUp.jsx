import { useRef } from "react";
import "../Css/Componets/SignUp.css"

function SignUp() {

    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    async function createAccount() {

        const accountData = {
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        try {
            const responce = await fetch("https://boss-grouper-explicitly.ngrok-free.app/api/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"
                },
                body: JSON.stringify(accountData)
            });

            if (!responce.ok) {
                console.error("error accured")
                return;
            }

            console.log("account created");
        } catch {

            console.error("server connection error");
        }
    }

    return(
        <div className="SignUp">
            <input ref={userNameRef} type="text" placeholder='User Name' minLength={4} maxLength={20} required/>
            <input ref={emailRef} type="email" placeholder='Email' required/>
            <input ref={passwordRef} type="password" placeholder='Password' minLength={6} maxLength={20} required/>
            <button type="submit" onClick={createAccount}>Submit</button>
        </div>
    );
}

export default SignUp