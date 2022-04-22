import classes from './ProfileContent.module.css'
import {Button, TextField} from "@mui/material";

const ProfileModal = ( { password, setPassword, editHandler , setIsModal } ) => {

    const clickHandler = () => {
        editHandler();
        setIsModal(false);
    }

    return (
        <div>
            <div className={classes.overlay} onClick={() => { setIsModal(false) }}/>
            <form className={classes.modal}>
                <div className={classes.fieldset}>
                    <TextField sx={{ width: '100%' }} label="Password" name={"password"} variant="outlined"
                               value={password}
                               type="password" onChange={ (e) => {
                        setPassword(e.target.value)} } />
                </div>
                <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                    clickHandler();
                }}>Edit</Button>
            </form>
        </div>
    )
}

export default ProfileModal;