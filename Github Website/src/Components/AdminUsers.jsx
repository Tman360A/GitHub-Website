import "../Css/Componets/AdminUsers.css";
import React, { useState, useEffect } from "react";
import AdminUserTab from "./AdminUserTab";

function AdminUsers({accountJSON}) {
  const [userData, setUserData] = useState([]);
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
        throw new Error("Failed to contact server");
      }

      const accountsData = await accounts.json();
      console.log("Fetched data for all accounts");
      setUserData(accountsData);

    } catch (error) {
      console.error("Error fetching all accounts:", error);
    }
  }

  function handleSearchChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredData = userData.filter((user) => user.userName.toLowerCase().includes(searchQuery));

  return (
    <div className="UserList">
      <h2>Users</h2>
      <div className="searchBar">
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="User Name..." />
        <div className="refreshIconContainer" onClick={fetchData}>
          <img src="/refresh-icon.svg" className="refreshIcon"/>
        </div>
      </div>
      {filteredData.map((user) => (
        <AdminUserTab key={user.id} id={user.id} userName={user.userName} password={user.password} />
      ))}
    </div>
  );
}

export default AdminUsers;