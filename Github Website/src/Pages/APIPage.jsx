import { useRef, useState } from "react"


function APIPage() {

    const [teamNames, setTeamName] = useState("");

    async function getTeamNumber() {
        const teamjson = (await fetch("https://www.thebluealliance.com/api/v3/team/frc4693"))
        setTeamName(teamjson.team_number)
    }
    
    return(
        <div>
            <button onClick={getTeamNumber}>Try This</button>
            <h1>{teamNames}</h1>
        </div>
    )

}

export default APIPage