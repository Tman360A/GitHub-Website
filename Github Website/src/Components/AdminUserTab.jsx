import "../Css/Componets/AdminUserTab.css"

function AdminUserTab({id, userName, password}) {

    async function deleteUser() {
        try {
            const responce = await fetch("https://boss-grouper-explicitly.ngrok-free.app/api/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"
                }
            });

            if (!responce.ok) {
                console.error("error accured")
                return;
            }

            console.log("account deleted");
        } catch (error) {

            console.error("server connection error");
            return;
        }
        

    }

    return(
        <div className="UserTabContainer">
            <div className="UserTabInfo">
                <p>ID: {id}</p>
                <p>User Name: {userName}</p>
                <p>Password: {password}</p>
            </div>
            <div className="UserTabOption">
                <button onClick={deleteUser}>Delete</button>
            </div>
        </div>
    );
}

export default AdminUserTab