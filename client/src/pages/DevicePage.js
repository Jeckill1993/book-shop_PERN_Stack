import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { fetchOneDevice } from '../api/deviceAPI';
import DevicePageItem from '../components/DeviceItem/DevicePageItem';

const DevicePage = observer(() => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();

    useEffect(() => {
        fetchOneDevice(id).then((data) => {
            setDevice(data);
        });
    }, [id]);

    return (
        <DevicePageItem device={device} />
    );
});

export default DevicePage;
