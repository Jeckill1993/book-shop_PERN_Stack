import {useContext, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";

// there have to be api

import { Context } from "../index";


const Profile = observer(() => {
    const { user } = useContext(Context);

    const [isUserInfo, setIsUserInfo] = useState(true);

    useEffect(() => {
        console.log(user.user.email);
        console.log(user.user.firstname);
        console.log()

        !user.user.firstname && !user.user.lastname ? setIsUserInfo(false) : setIsUserInfo(true);
    }, []);


    return (
        <div className="main">
            <h1>Your Profile</h1>
            {
                isUserInfo
                    ? <div>Your info</div>
                    : <form>
                        <input/>
                    <button>Edit</button>
                    </form>
            }
        </div>
    );
})

export default Profile;
