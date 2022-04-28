import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import DeviceList from '../DeviceList/DeviceList';
import Pagination from '../Pagination/Pagination';

import { Context } from '../../index';

import classes from './SaleContent.module.css';

const SaleContent = observer(() => {
    const { device } = useContext(Context);

    const devices = device.saleDevices;
    
    return (
        <div className={classes.content}>
            <DeviceList devices={devices}/>
            <Pagination device={device}/>
        </div>
    );
});

export default SaleContent;