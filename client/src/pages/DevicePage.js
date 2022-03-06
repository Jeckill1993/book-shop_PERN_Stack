import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../api/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then((data) => {
            setDevice(data);
        })
    }, []);

    return (
        <div>

        </div>
    );
}

export default DevicePage;
