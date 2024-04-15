import { useState } from 'react';
import { useParams, } from 'react-router-dom'

function AccountPage() {

    const {userName} = useParams();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    async function getAccountData() {
        try {
            const responce = await fetch("https://boss-grouper-explicitly.ngrok-free.app/api/" + userName, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"
                }
            });

            if (!responce.ok) {
                return;
            }

            console.log("account data recevied");
            const accountData = await responce.json();
            setUserEmail(accountData.email);
            setUserPassword(accountData.password);
        } catch (error) {

            console.error("server connection error");
            return;
        }
    }

    getAccountData();
    return(
        <>
            <p>{userName}</p>
            <p>{userEmail}</p>
            <p>{userPassword}</p>
        </>
    );
}

export default AccountPage