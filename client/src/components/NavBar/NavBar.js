import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, CATALOG_ROUTE, PROFILE_ROUTE, SALES_ROUTE} from "../../utils/const";
import {useContext} from "react";
import {Context} from "../../index";
import SignHeader from "../SignHeader/SignHeader";
import {observer} from "mobx-react-lite";

import classes from "./NavBar.module.css";


const NavBar = observer(() => {
    const { user } = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        if (user.role === 'ADMIN') {
            user.setIsAdmin(false);
        }
        localStorage.setItem('token', '');

    }

    return (
        <nav className={classes.menu}>
            <NavLink className={classes.menuLink} to={CATALOG_ROUTE}>Catalog</NavLink>
            <NavLink className={classes.menuLink} to={SALES_ROUTE}>Sales</NavLink>
            { user.isAuth
                    ? <div>
                        <NavLink className={classes.menuLink} to={PROFILE_ROUTE}>Profile</NavLink>
                        <button onClick={ () => {logOut()} }>Exit</button>
                      </div>
                    : <SignHeader/> }
            { user.isAuth && user.isAdmin ? <NavLink className={classes.menuLink} to={ADMIN_ROUTE}>Admin Panel</NavLink> : '' }
        </nav>
    );
})

export default NavBar;
