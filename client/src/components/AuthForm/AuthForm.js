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
        <div className="authForm">
            <h2>{isLogin ? 'Authorization' : 'Registration'}</h2>
            <input onChange={ (e) => {setEmail(e.target.value)} } type="text" placeholder={"email"} name={"email"} value={email}/>
            <input onChange={ (e) => {setPassword(e.target.value)} } type="password" placeholder={"password"} name={"password"} value={password}/>
            <button onClick={ () => { auth() } }>{isLogin ? 'Enter' : 'Register'}</button>
            {isLogin
                ? <div>
                    Don't you have account?
                    <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                  </div>
                : <div>
                    Have you already account?
                    <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                  </div>}
        </div>
    );
})

export default AuthForm;
