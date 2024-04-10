import "../Css/Componets/AdminUsers.css";
import React, { useState, useEffect } from "react";
import AdminUserTab from "./AdminUserTab";

function AdminUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const httpRequest = "https://boss-grouper-explicitly.ngrok-free.app/api/accounts";
            const account = await fetch(httpRequest, {
                method: "GET",
                headers: { "ngrok-skip-browser-warning": "true"}
            });

            if (!account.ok) {
                throw new Error("Failed to fetch user data");
            }

            const userData = await account.json();
            console.log("Fetched data:", userData); // Log fetched data
            setData(userData);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return(
        <div className="UserList">
            {data.map((user) => (
                <AdminUserTab id={user.id} userName={user.userName} password={user.password} />
            ))}
        </div>
    );
}

export default AdminUsers;
