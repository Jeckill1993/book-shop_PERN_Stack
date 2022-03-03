import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/const";

import classes from './SignHeader.module.css';


const SignHeader = () => {
    return (
        <div className={classes.signBox}>
            <NavLink className={`${classes.signLink} ${classes.signLink_primary}`} to={REGISTRATION_ROUTE}>Sign Up</NavLink>
            <NavLink className={`${classes.signLink} ${classes.signLink_secondary}`} to={LOGIN_ROUTE}>Sign In</NavLink>
        </div>
    );
}

export default SignHeader;
