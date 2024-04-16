import "../Css/Pages/AccountPage.css"
import { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom'

function AccountPage() {
    const {userName} = useParams();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [text, setText] = useState("");
    const [finalText, setFinalText] = useState("Tman360");
    const [finalTextSlice, setfinalTextSlice] = useState(0);
    const [textSlice, setTextSlice] = useState("");

    useEffect(() => {
        const periodic = setInterval(() => {
            generateRandomText();
        }, 50);

        const incrementPeriodic = setInterval(() => {
            increment();
        }, 200);

        getAccountData();

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(periodic);
            clearInterval(incrementPeriodic);
        };
    }, []);

    useEffect(() => {
        if (finalText.slice(0, finalTextSlice) === finalText) {
            setTextSlice(1);
        }
    }, [finalText, finalTextSlice]);

    const generateRandomText = () => {
        const randomText = Array.from({ length: 1 }, () =>
          String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        ).join("");

        setText(randomText);
        setTextSlice(textSlice + randomText);
    };

    function increment() {
        if (finalText.length > finalTextSlice) {
            setfinalTextSlice(prevSlice => prevSlice + 1);
        } else {
            setText(1)
        };
    }

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

    return(
        <div className="AccountPage">
            <p>{userName}</p>
            <p>{userEmail}</p>
            <p>{userPassword}</p>
            <p>{finalText.slice(0, finalTextSlice) + textSlice}</p>
            <p>{finalTextSlice}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default AccountPage