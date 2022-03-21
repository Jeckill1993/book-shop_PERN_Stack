import classes from './Basket.module.css';
import {useContext} from "react";
import {Context} from "../../index";

const BasketList = () => {
    const { basket } = useContext(Context);

    return (
        <div>
            Basket
        </div>
    )
}

export default BasketList;