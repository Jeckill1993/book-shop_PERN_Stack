import classes from "./AdminPanelItems.module.css";
import {useContext} from "react";
import {Context} from "../../index";


const AdminBrandItem = ({item, setDeviceVisible, setIsEdit}) => {
    const { device } = useContext(Context);

    const clickEdit = (deviceItem) => {
        device.setSelectedDevice(deviceItem);
        setIsEdit(true);
        setDeviceVisible(true);
    }

    return (
        <li className={classes.adminItemContainer}>
            <div className={classes.adminItemRow}>
                <div>{item.name}</div>
                <div className={classes.adminItemBtnBox}>
                    <button className={classes.adminEditBtn} onClick={() => {clickEdit(item)}}>Edit</button>
                    <button className={classes.adminDeleteBtn} />
                </div>
            </div>
        </li>
    )
}

export default AdminBrandItem;