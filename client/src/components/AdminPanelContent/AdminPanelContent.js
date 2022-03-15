import classes from './AdminPanelContent.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import CreateBrand from "../modals/CreateBrand";
import CreateType from "../modals/CreateType";
import CreateDevice from "../modals/CreateDevice";
import AdminBrandItem from "../adminPanelItems/AdminBrandItem";
import AdminTypeItem from "../adminPanelItems/AdminTypeItem";
import AdminDeviceItem from "../adminPanelItems/AdminDeviceItem";


const AdminPanelContent = observer(({activeSection}) => {
    const {device} = useContext(Context);

    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className={classes.adminContentContainer}>
            <ul className={classes.adminItemList}>
                {activeSection === 'devices' ? device.devices.map((item) => {
                    return <AdminDeviceItem key={item.id} item={item} setDeviceVisible={setDeviceVisible} setIsEdit={setIsEdit}/>
                }) : null}
                {activeSection === 'types' ? device.types.map((item) => {
                    return <AdminTypeItem key={item.id} item={item} setTypeVisible={setTypeVisible} setIsEdit={setIsEdit}/>
                }) : null}
                {activeSection === 'brands' ? device.brands.map((item) => {
                    return <AdminBrandItem key={item.id} item={item} setBrandVisible={setBrandVisible} setIsEdit={setIsEdit}/>
                }) : null}
            </ul>
            <div className={classes.adminBtnRow}>
                {activeSection === 'devices' ? <button className={classes.adminBtnGeneral}
                                                       onClick={ () => {setDeviceVisible(true)} }>New Device</button> : null}
                {activeSection === 'types' ? <button className={classes.adminBtnGeneral}
                                                     onClick={ () => {setTypeVisible(true)} }>New Type</button> : null}
                {activeSection === 'brands' ? <button className={classes.adminBtnGeneral}
                                                      onClick={ () => {setBrandVisible(true)} }>New Brand</button> : null}
            </div>

            {brandVisible ? <CreateBrand onHide={ () => {
                setBrandVisible(false);
                setIsEdit(false);
            } } isEdit={isEdit} /> : null}
            {typeVisible ? <CreateType onHide={ () => {
                setTypeVisible(false);
                setIsEdit(false);
            } } isEdit={isEdit} /> : null}
            {deviceVisible ? <CreateDevice onHide={ () => {
                setDeviceVisible(false);
                setIsEdit(false);
            } } isEdit={isEdit} /> : null}
        </div>
    );
})

export default AdminPanelContent;
