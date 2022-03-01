import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/const";


const SignHeader = () => {

    return (
        <div>
            <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
            <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
        </div>
    );
}

export default SignHeader;
