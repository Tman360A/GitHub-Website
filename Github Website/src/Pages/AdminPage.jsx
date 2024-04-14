import { useState } from "react";
import AdminUsers from "../Components/AdminUsers";
import AdminLogin from "../Components/AdminLogin";

function AdminPage() {

    const [adminLoginVisible , setAdminLoginVisible] = useState(true);
    const [usersVisible, setUsersVisible] = useState(false);

    function changeVisiblilty() {
        setAdminLoginVisible(false);
        setUsersVisible(true);
    }

    return(
        <>
            {adminLoginVisible && <AdminLogin changeVisiblityFunction={changeVisiblilty}/>}
            {usersVisible && <AdminUsers />}
        </>
    );
}

export default AdminPage