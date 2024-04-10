import "../Css/Componets/AdminUsers.css"
import { useRef, useState } from "react";

function AdminUsers() {
    const input = useRef(null);

    const [output, setOutput] = useState("");

    async function getUser() {
        try {
            const httpRequest = "https://22ab-71-8-146-222.ngrok-free.app/api/" + input.current.value;
            const account = await fetch(httpRequest, {
                method: "GET",
                headers: { "ngrok-skip-browser-warning": "true"}
            });
            
            if (!account.ok) {
                throw new Error("Failed to fetch user data");
            }

            const userData = await account.json();
            setOutput("User Name: " + userData.userName + " Password: " + userData.password);
        } catch (error) {
            setOutput("Invalid User Name or Failed to fetch user data");
        }
    }

    return(
        <div>
            {}
        </div>
    );
}

export default AdminUsers;
