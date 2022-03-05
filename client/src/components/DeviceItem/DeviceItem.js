import classes from "./DeviceItem.module.css";
import { useNavigate } from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/const";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <li className={"device-item"} onClick={() => {navigate(DEVICE_ROUTE + '/' + device.id)}}>
            {device.name}
        </li>
    )
}

export default DeviceItem;