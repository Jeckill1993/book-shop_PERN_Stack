import { NavLink } from 'react-router-dom';

import { Button } from '@mui/material';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/const';

import classes from './NavBar.module.css';


const SignHeader = () => {
    return (
        <div className={classes.signBox}>
            <NavLink className={classes.signBoxItem} to={REGISTRATION_ROUTE}>
                <Button sx={{ width: '120px' }} variant={'contained'} color="dark"
                    type={'button'}>Sign Up</Button>
            </NavLink>
            <NavLink className={classes.signBoxItem} to={LOGIN_ROUTE}>
                <Button sx={{ width: '120px' }} variant={'contained'} color="dark"
                    type={'button'}>Sign In</Button>
            </NavLink>
        </div>
    );
};

export default SignHeader;
