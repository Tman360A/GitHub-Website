import "../Css/Pages/AccountPage.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlitchText from "../Util/GlitchText"

function AccountPage() {
    const { userName } = useParams();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    useEffect(() => {
        getAccountData();
    }, []) 

    const getAccountData = async () => {
        try {
            const response = await fetch("https://boss-grouper-explicitly.ngrok-free.app/api/" + userName, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"
                }
            });

            if (!response.ok) {
                console.log("Error fetching account data");
                return;
            }

            console.log("account data received");
            const accountData = await response.json();
            setUserEmail(accountData.email);
            setUserPassword(accountData.password);
        } catch (error) {
            console.error("server connection error");
        }
    }

    return (
        <div className="AccountPage">
            <p>{GlitchText(userName)}</p>
            <p>{userEmail}</p>
            <p>{userPassword}</p>
        </div>
    );
}

export default AccountPage;
