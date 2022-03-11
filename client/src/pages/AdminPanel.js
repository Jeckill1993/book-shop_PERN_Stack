import AdminPanelNavBar from "../components/AdminPanelNavBar/AdminPanelNavBar";
import AdminPanelContent from "../components/AdminPanelContent/AdminPanelContent";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../api/deviceAPI";


const AdminPanel = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => {
            device.setTypes(data);
        });
        fetchBrands().then((data) => {
            device.setBrands(data);
        });
        fetchDevices().then((data) => {
            device.setDevices(data.rows);
        })
    }, [])

    const [activeSection, setActiveSection] = useState('devices');

    return (
        <div className={"admin-container"}>
            <AdminPanelNavBar setActiveSection={setActiveSection} />
            <AdminPanelContent activeSection={activeSection} />
        </div>
    );
})

export default AdminPanel;
