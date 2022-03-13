import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/const";

import classes from "./AuthForm.module.css";
import {login, registration} from "../../api/useAPI";
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

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
                <input className={classes.field} onChange={ (e) => {setEmail(e.target.value)} } type="text"
                       placeholder={"email"} name={"email"} value={email}/>
            </div>
            <div className={classes.fieldset}>
                <input className={classes.field} onChange={ (e) => {setPassword(e.target.value)} } type="password"
                       placeholder={"password"} name={"password"} value={password}/>
            </div>
            <div className={classes.row}>
                <button className={classes.btn} onClick={ () => { auth() } }>{isLogin ? 'Enter' : 'Register'}</button>
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
