import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SALES_ROUTE} from "../utils/const";

const NavBar = () => {
    return (
        <nav>
            <NavLink to={CATALOG_ROUTE}>Catalog</NavLink>
            <NavLink to={SALES_ROUTE}>Sales</NavLink>
            <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
            <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
            <NavLink to={ADMIN_ROUTE}>Admin Panel</NavLink>
        </nav>
    );
}

export default NavBar;
