import {useContext} from "react";
import {Context} from "../index";

const Profile = () => {
    const {user} = useContext(Context);

    return (
        <div className="main">
            <h1>{user.user.email}</h1>
        </div>
    );
}

export default Profile;
