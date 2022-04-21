import {observer} from "mobx-react-lite";

import classes from "./ProfileContent.module.css";
import {useContext} from "react";
import {Context} from "../../index";
import EditIcon from "@mui/icons-material/Edit";
import {IconButton} from "@mui/material";

const ProfileInfo = observer(( { setIsEdit } ) => {
    const {user} = useContext(Context);

    return (
        <div className={classes.infoBox}>
            <div className={classes.text}>
                <span className={classes.label}>Email:</span>
                <p className={classes.info}>{user.user.email ? user.user.email : 'Click button "Edit" for add you email'}</p>
            </div>
            <div className={classes.text}>
                <span className={classes.label}>First Name:</span>
                <p className={classes.info}>{user.user.firstname ? user.user.firstname
                    : 'Click button "Edit" for add you first name'}</p>
            </div>
            <div className={classes.text}>
                <span className={classes.label}>Last Name:</span>
                <p className={classes.info}>{user.user.lastname ? user.user.lastname
                    : 'Click button "Edit" for add you last name'}</p>
            </div>
            <div className={classes.text}>
                <span className={classes.label}>Phone:</span>
                <p className={classes.info}>{user.user.phone ? user.user.phone
                : 'Click button "Edit" for add you phone'}</p>
            </div>
            <div className={classes.text}>
                <span className={classes.label}>Your orders:</span>
                <p className={classes.info}>No one order yet</p>
            </div>
            <div className={classes.btnBox}>
                <IconButton aria-label="edit" color="dark" onClick={() => { setIsEdit(true) }}>
                    <EditIcon />
                </IconButton>
            </div>
        </div>
    )
})

export default ProfileInfo;