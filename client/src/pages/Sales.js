import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';
import { fetchSaleDevices } from '../api/deviceAPI';
import SaleContent from '../components/SaleContent/SaleContent';

const Sales = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchSaleDevices(device.page, 2).then((data) => {
            device.setSaleDevices(data.rows);
            device.setTotalCount(data.count);
        });
    }, [device, device.page]);
    
    return (
        <div className="sale-container">
            <SaleContent />
        </div>
    );
});

export default Sales;
