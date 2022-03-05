import classes from './DeviceList.module.css';

import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../index";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={"catalog-top-bar"}>
            <ul>
                { device.devices.map((device) => {
                    return <DeviceItem key={device.id} device={device}/>
                }) }
            </ul>
        </div>
    );
})

export default DeviceList;