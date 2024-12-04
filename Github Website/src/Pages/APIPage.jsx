import { useRef, useState } from "react"


function APIPage() {

    const [teamNames, setTeamName] = useState("");

    async function getTeamNumber() {
        const teamjson = await fetch("https://www.thebluealliance.com/api/v3/team/frc4693", {
            method: "GET",
            headers: {
                "X-TBA-Auth-Key" : "FdfmyT3BLXwgTNRAhD4XzWXpXhPrVk8kP5LLlZ1qe3ZLr8Djz4ddKIdsaRblG47G"
            }
        }
        );
        alert(teamjson.team_key);
    }
    
    return(
        <div>
            <button onClick={getTeamNumber}>Try This</button>
            <h1>{teamNames}</h1>
        </div>
    )

}

export default APIPage