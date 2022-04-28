import DeviceItem from '../DeviceItem/DeviceItem';

import classes from './DeviceList.module.css';

const DeviceList = ({ devices }) => {

    return (
        <div className={classes.deviceListContainer}>
            <ul className={classes.deviceList}>
                { devices.map((device) => {
                    return <DeviceItem key={device.id} device={device}/>;
                }) }
            </ul>
        </div>
    );
};

export default DeviceList;