import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/const";

import classes from "./AuthForm.module.css";
import {login, registration} from "../../api/useAPI";
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Button, TextField} from "@mui/material";

const AuthForm = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const auth = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login({email, password});
            } else {
                data = await registration({email, password});
            }

            user.setUser(data);
            user.setIsAuth(true);
            if (data.role === 'ADMIN') {
                user.setIsAdmin(true);
            }
            navigate(SHOP_ROUTE);

        } catch (e) {
            alert(e.response.data.message);
        }


    }

    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{isLogin ? 'Authorization' : 'Registration'}</h3>
            <div className={classes.fieldset}>
                <TextField sx={{ width: '100%' }} label="Email" name={"email"} variant="outlined" value={ email }
                           onChange={ (e) => {
                               setEmail(e.target.value)} } />
            </div>
            <div className={classes.fieldset}>
                <TextField sx={{ width: '100%' }} label="Password" name={"password"} variant="outlined" value={ password }
                           type="password" onChange={ (e) => {
                               setPassword(e.target.value)} } />
            </div>
            <div className={classes.row}>
                <Button sx={{ width: '100%' }} variant={'contained'} color="dark" type={"button"}
                        onClick={ () => { auth() } }>{ isLogin ? 'Enter' : 'Register' }</Button>
            </div>
            {isLogin
                ? <div className={classes.botContainer}>
                    Don't you have account?
                    <NavLink className={classes.link} to={REGISTRATION_ROUTE}>Register</NavLink>
                  </div>
                : <div className={classes.botContainer}>
                    Have you already account?
                    <NavLink className={classes.link} to={LOGIN_ROUTE}>Login</NavLink>
                  </div>}
        </div>
    );
})

export default AuthForm;
