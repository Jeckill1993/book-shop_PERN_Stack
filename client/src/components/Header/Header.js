import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/const";
import NavBar from "../NavBar";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="wrapper">
                <div className="container-flex">
                    <NavLink className={classes.logo} to={SHOP_ROUTE}>
                        <img src="../../assets/img/logo.jpg" alt="logo"/>
                    </NavLink>
                    <NavBar />
                </div>
            </div>
        </header>
    );
}

export default Header;
