import classes from "./DeviceItem.module.css";
import { useNavigate } from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/const";
import {addDeviceToBasket} from "../../api/deviceAPI";
import {useContext} from "react";
import {Context} from "../../index";

const DeviceItem = ({ device }) => {
    const { basket } = useContext(Context);
    const navigate = useNavigate();

    const clickAdd = (device) => {
        const formData = new FormData();
        formData.append('name', device.name);
        formData.append('price', `${device.price}`);
        formData.append('basketId', `${basket.basket.id}`);
        formData.append('deviceId', `${device.id}`);

        addDeviceToBasket(formData).then((data) => {
            alert(device.name + 'was added to basket');
        })
    }

    return (
        <li className={classes.box}>
            <div className={classes.item} >
                <div onClick={() => {navigate(DEVICE_ROUTE + '/' + device.id)}}>
                    <div className={classes.image}>
                        <img src={process.env.REACT_APP_CLIENT_API + device.img} />
                    </div>
                    <div className={classes.info}>
                        <span className={classes.name}>{device.name}</span>
                        <span className={classes.price}>{device.price}</span>
                    </div>
                    <div>{device.rating}</div>
                </div>
                <button className={classes.btn} onClick={ () => {clickAdd(device)} }>Add to Basket</button>
            </div>
        </li>
    )
}

export default DeviceItem;