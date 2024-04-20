import React from "react";
import "../Css/Pages/AccountPage.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlitchText from "../Util/GlitchText"

function AccountPage() {
    const { userName } = useParams();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        getAccountData()
    }, [userName]);

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
                window.location.href = "/*"
                return;
            }

            console.log("Account data received");
            const accountData = await response.json();
            setUserEmail(accountData.email);
            setUserPassword(accountData.password);

            setFetchedData([
                <GlitchText key="email" Word={userEmail} />,
                <GlitchText key="password" Word={userPassword} />
            ]);

        } catch (error) {
            console.error("Server connection error:", error);
        }
    }

    return (
        <div key="page" className="AccountPage">
            <GlitchText Word={userName} />
            {fetchedData}
        </div>
    );
}

export default AccountPage;
