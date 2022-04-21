import {useContext, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";
import ProfileEdit from "../components/ProfileContent/ProfileEdit";
import ProfileInfo from "../components/ProfileContent/ProfileInfo";
import classes from "../components/ProfileContent/ProfileContent.module.css";


const Profile = observer(() => {
    const { user } = useContext(Context);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        !user.user.firstname || !user.user.lastname ? setIsEdit(true) : setIsEdit(false);
    },[]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Your Profile</h1>
            {
                isEdit
                    ? <ProfileEdit setIsEdit={setIsEdit} />
                    : <ProfileInfo setIsEdit={setIsEdit} />
            }
        </div>
    );
})

export default Profile;
