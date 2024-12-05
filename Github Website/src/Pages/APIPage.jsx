import { useState } from "react";

function APIPage() {
    const [teamNames, setTeamName] = useState("");

    async function getTeamNumber() {
        try {
            const response = await fetch("https://www.thebluealliance.com/api/v3/team/frc4693", {
                method: "GET",
                headers: {
                    "X-TBA-Auth-Key": "FdfmyT3BLXwgTNRAhD4XzWXpXhPrVk8kP5LLlZ1qe3ZLr8Djz4ddKIdsaRblG47G"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const teamData = await response.json(); // Parse the JSON from the response
            alert(JSON.stringify(teamData)); // Alert the JSON data as a string for debugging
            setTeamName(teamData.nickname); // Assuming the JSON has a `nickname` field
        } catch (error) {
            alert("An error occurred: " + error.message);
            console.error(error);
        }
    }

    return (
        <div>
            <button onClick={getTeamNumber}>Try This</button>
            <h1>{teamNames}</h1>
        </div>
    );
}

export default APIPage;
