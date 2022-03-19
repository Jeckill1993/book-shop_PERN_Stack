import classes from "./DeviceItem.module.css";
import { useNavigate } from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/const";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <li className={classes.box} onClick={() => {navigate(DEVICE_ROUTE + '/' + device.id)}}>
            <div className={classes.item}>
                <div className={classes.image}>
                    <img src={process.env.REACT_APP_CLIENT_API + device.img} />
                </div>
                <div className={classes.info}>
                    <span className={classes.name}>{device.name}</span>
                    <span className={classes.price}>{device.price}</span>
                </div>
                <div>{device.rating}</div>
                <button className={classes.btn}>Add to Basket</button>
            </div>
        </li>
    )
}

export default DeviceItem;