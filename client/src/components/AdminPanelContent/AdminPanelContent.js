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
        <div className={classes.adminContentContainer}>
            <ul className={classes.adminItemList}>
                {activeSection === 'devices' ? device.devices.map((item) => {
                    return <li className={classes.adminItemContainer} key={item.id}>
                        <div className={classes.adminItemRow}>
                            <div>{item.name}</div>
                            <div className={classes.adminItemBtnBox}>
                                <button className={classes.adminEditBtn}>Edit</button>
                                <button className={classes.adminDeleteBtn} />
                            </div>
                        </div>
                    </li>
                }) : null}
                {activeSection === 'types' ? device.types.map((item) => {
                    return <li className={classes.adminItemContainer} key={item.id}>
                        <div className={classes.adminItemRow}>
                            <div>{item.name}</div>
                            <div className={classes.adminItemBtnBox}>
                                <button className={classes.adminEditBtn}>Edit</button>
                                <button className={classes.adminDeleteBtn} />
                            </div>
                        </div>
                    </li>
                }) : null}
                {activeSection === 'brands' ? device.brands.map((item) => {
                    return <li className={classes.adminItemContainer} key={item.id}>
                        <div className={classes.adminItemRow}>
                            <div>{item.name}</div>
                            <div className={classes.adminItemBtnBox}>
                                <button className={classes.adminEditBtn}>Edit</button>
                                <button className={classes.adminDeleteBtn} />
                            </div>
                        </div>
                    </li>
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

            {brandVisible ? <CreateBrand onHide={ () => {setBrandVisible(false)} }/> : null}
            {typeVisible ? <CreateType onHide={ () => {setTypeVisible(false)} }/> : null}
            {deviceVisible ? <CreateDevice onHide={ () =>{setDeviceVisible(false)} }/> : null}
        </div>
    );
})

export default AdminPanelContent;
