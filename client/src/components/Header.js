import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/const";

const Header = () => {
    return (
            <NavLink to={SHOP_ROUTE}>
                <img src="logo" alt="logo"/>
            </NavLink>
    );
}

export default Header;
