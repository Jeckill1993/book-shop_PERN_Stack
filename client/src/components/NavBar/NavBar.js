import { NavLink } from 'react-router-dom';

import { useContext, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Button, IconButton } from '@mui/material';

import DehazeIcon from '@mui/icons-material/Dehaze';

import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, PROFILE_ROUTE, SALES_ROUTE } from '../../utils/const';
import { Context } from '../../index';

import SignHeader from './SignHeader';


import classes from './NavBar.module.css';




const NavBar = observer(() => {
    const { user } = useContext(Context);

    const [isOpenMenu, setOpenMenu] = useState(false);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        if (user.role === 'ADMIN') {
            user.setIsAdmin(false);
        }
        localStorage.setItem('token', '');

    };

    const closeMenuHandler = () => {
        if(!isOpenMenu) return;
        setOpenMenu(false);
    };

    return (
        <div>
            <nav className={isOpenMenu ? `${classes.menu} ${classes.opened}` : `${classes.menu}` }
                onClick={ () => {closeMenuHandler();} } >
                <NavLink className={classes.menuLink} to={CATALOG_ROUTE}>Catalog</NavLink>
                <NavLink className={classes.menuLink} to={SALES_ROUTE}>Sales</NavLink>
                { user.isAuth
                    ? <div className={classes.additionalMenu}>
                        <NavLink className={classes.menuLink} to={PROFILE_ROUTE}>Profile</NavLink>
                        <NavLink className={classes.menuLink} to={BASKET_ROUTE}>Basket</NavLink>
                        <div className={classes.btnContainer}>
                            <Button variant={'contained'} size={'large'} onClick={() => {
                                logOut();}}>Exit</Button>
                        </div>

                    </div>
                    : <SignHeader/> }
                { user.isAuth && user.isAdmin
                    ?   <NavLink to={ADMIN_ROUTE}>
                        <div className={classes.btnContainer}>
                            <Button variant={'contained'} size={'large'} color="dark">Admin Panel</Button>
                        </div>
                    </NavLink>
                    : '' }
                <div className={classes.closeMenu} onClick={ () => {closeMenuHandler();} }/>
            </nav>
            <div className={classes.burgerBtnContainer} onClick={ () => {setOpenMenu(true);} }>
                <IconButton aria-label="mobile-menu" color="dark">
                    <DehazeIcon/>
                </IconButton>
            </div>
        </div>
    );
});

export default NavBar;
