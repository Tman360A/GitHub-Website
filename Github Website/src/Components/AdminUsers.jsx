import "../Css/Componets/AdminUsers.css";
import React, { useState, useEffect } from "react";
import AdminUserTab from "./AdminUserTab";

function AdminUsers() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const httpRequest = "https://boss-grouper-explicitly.ngrok-free.app/api/accounts";
      const accounts = await fetch(httpRequest, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      });

      if (!accounts.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await accounts.json();
      console.log("Fetched data:", userData); // Log fetched data
      setData(userData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredData = data.filter((user) => user.userName.toLowerCase().includes(searchQuery));

  return (
    <div className="UserList">
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="User Name..." />
      {filteredData.map((user) => (
        <AdminUserTab key={user.id} id={user.id} userName={user.userName} password={user.password} />
      ))}
    </div>
  );
}

export default AdminUsers;