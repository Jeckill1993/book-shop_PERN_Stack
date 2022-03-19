import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../api/deviceAPI";
import DevicePageItem from "../components/DeviceItem/DevicePageItem";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then((data) => {
            setDevice(data);
        })
    }, []);

    return (
        <DevicePageItem device={device} />
    );
}

export default DevicePage;
