import classes from './AdminPanelContent.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import CreateBrand from "../modals/CreateBrand";
import CreateType from "../modals/CreateType";
import CreateDevice from "../modals/CreateDevice";


const AdminPanelContent = observer(({activeSection}) => {
    const {device} = useContext(Context);

    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <div>
            <ul>
                {activeSection === 'devices' ? device.devices.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                }) : null}
                {activeSection === 'types' ? device.types.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                }) : null}
                {activeSection === 'brands' ? device.brands.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                }) : null}
            </ul>
            <div>
                {activeSection === 'devices' ? <button onClick={ () => {setDeviceVisible(true)} }>New Device</button> : null}
                {activeSection === 'types' ? <button onClick={ () => {setTypeVisible(true)} }>New Type</button> : null}
                {activeSection === 'brands' ? <button onClick={ () => {setBrandVisible(true)} }>New Brand</button> : null}
            </div>

            {brandVisible ? <CreateBrand onHide={ () => {setBrandVisible(false)} }/> : null}
            {typeVisible ? <CreateType onHide={ () => {setTypeVisible(false)} }/> : null}
            {deviceVisible ? <CreateDevice onHide={ () =>{setDeviceVisible(false)} }/> : null}
        </div>
    );
})

export default AdminPanelContent;
