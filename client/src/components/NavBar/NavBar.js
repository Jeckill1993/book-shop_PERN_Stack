import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, PROFILE_ROUTE, SALES_ROUTE} from "../../utils/const";
import {useContext, useState} from "react";
import {Context} from "../../index";
import SignHeader from "./SignHeader";
import {observer} from "mobx-react-lite";

import classes from "./NavBar.module.css";
import {Button} from "@mui/material";


const NavBar = observer(() => {
    const { user } = useContext(Context);

    const [isMobile, setIsMobile] = useState(false);

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
                        <NavLink className={classes.menuLink} to={BASKET_ROUTE}>Basket</NavLink>
                    <Button sx={{ marginLeft: '40px' }} variant={'contained'} size={'large'} onClick={() => {
                        logOut()}}>Exit</Button>
                      </div>
                    : <SignHeader/> }
            { user.isAuth && user.isAdmin ? <NavLink className={classes.menuLink} to={ADMIN_ROUTE}>Admin Panel</NavLink> : '' }
        </nav>
    );
})

export default NavBar;
