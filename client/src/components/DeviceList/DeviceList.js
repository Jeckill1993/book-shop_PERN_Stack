
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { Context } from '../../index';
import DeviceItem from '../DeviceItem/DeviceItem';

import classes from './DeviceList.module.css';

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={classes.deviceListContainer}>
            <ul className={classes.deviceList}>
                { device.devices.map((device) => {
                    return <DeviceItem key={device.id} device={device}/>;
                }) }
            </ul>
        </div>
    );
});

export default DeviceList;