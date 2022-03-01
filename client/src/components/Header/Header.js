import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/const";
import NavBar from "../NavBar";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <NavLink to={SHOP_ROUTE}>
                    <img src="" alt="logo"/>
                </NavLink>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;
