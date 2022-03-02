import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, CATALOG_ROUTE, PROFILE_ROUTE, SALES_ROUTE} from "../../utils/const";
import {useContext} from "react";
import {Context} from "../../index";
import SignHeader from "../SignHeader/SignHeader";

import classes from "./NavBar.module.css";

const NavBar = () => {
    const { user } = useContext(Context);

    return (
        <nav className={classes.menu}>
            <NavLink className={classes.menuLink} to={CATALOG_ROUTE}>Catalog</NavLink>
            <NavLink className={classes.menuLink} to={SALES_ROUTE}>Sales</NavLink>
            { user.isAuth
                    ? <NavLink className={classes.menuLink} to={PROFILE_ROUTE}>Profile</NavLink>
                    : <SignHeader/> }
            { user.isAuth && user.isAdmin ? <NavLink to={ADMIN_ROUTE}>Admin Panel</NavLink> : '' }
        </nav>
    );
}

export default NavBar;
