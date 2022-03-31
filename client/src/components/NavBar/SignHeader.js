import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/const";

import classes from "./NavBar.module.css";
import {Button} from "@mui/material";


const SignHeader = () => {
    return (
        <div className={classes.signBox}>
            <NavLink to={REGISTRATION_ROUTE}>
                <Button sx={{ width: '120px', marginLeft: '40px' }} variant={'contained'} color="dark"
                        type={"button"}>Sign Up</Button>
                </NavLink>
            <NavLink to={LOGIN_ROUTE}>
                <Button sx={{ width: '120px', marginLeft: '10px' }} variant={'contained'} color="dark"
                        type={"button"}>Sign In</Button>
            </NavLink>
        </div>
    );
}

export default SignHeader;
