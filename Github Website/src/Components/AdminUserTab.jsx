import "../Css/Componets/AdminUserTab.css"

function AdminUserTab({id, userName, password}) {
    return(
        <div className="UserTab">
            <p>ID: {id}</p>
            <p>User Name: {userName}</p>
            <p>Password: {password}</p>
        </div>
    );
}

export default AdminUserTab