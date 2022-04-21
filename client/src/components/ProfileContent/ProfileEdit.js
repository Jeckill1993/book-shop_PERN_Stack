import {observer} from "mobx-react-lite";
import classes from "./ProfileContent.module.css";
import {Button, TextField} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {updateUser} from "../../api/userAPI";

const ProfileEdit = observer(({setIsEdit}) => {
    const {user} = useContext(Context);

    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const userEmail = user.user.email ? user.user.email : '';
        const userFirstName = user.user.firstname ? user.user.firstname : '';
        const userLastName = user.user.lastname ? user.user.lastname : '';
        const userPhone = user.user.phone ? user.user.phone : '';

        setEmail(userEmail);
        setFirstName(userFirstName);
        setLastName(userLastName);
        setPhone(userPhone);
    }, []);

    const getFormData = () => {
        const formData = {
            id: `${user.user.id}`,
            email: `${email}`,
            firstname: `${firstname}`,
            lastname: `${lastname}`,
            phone: `${phone}`,
            role: `${user.user.role}`
        };

        return formData;
    }

    const editHandler = () => {
        const userInfo = getFormData();

        updateUser(userInfo).then((user) => {
            user.setUser(user);
        });
        setIsEdit(false);
    }

    return (
        <form>
            <div className={classes.fieldset}>
                <TextField sx={{width: '100%'}} label="Email:" variant="outlined" value={email}
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}/>
            </div>
            <div className={classes.fieldset}>
                <TextField sx={{width: '100%'}} label="First Name:" variant="outlined" value={firstname}
                           onChange={(e) => {
                               setFirstName(e.target.value)
                           }}/>
            </div>
            <div className={classes.fieldset}>
                <TextField sx={{width: '100%'}} label="Last Name:" variant="outlined" value={lastname}
                           onChange={(e) => {
                               setLastName(e.target.value)
                           }}/>
            </div>
            <div className={classes.fieldset}>
                <TextField sx={{width: '100%'}} label="Phone:" variant="outlined" value={phone}
                           onChange={(e) => {
                               setPhone(e.target.value)
                           }}/>
            </div>
            <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                editHandler()
            }}>Edit</Button>
        </form>
    )

})

export default ProfileEdit;