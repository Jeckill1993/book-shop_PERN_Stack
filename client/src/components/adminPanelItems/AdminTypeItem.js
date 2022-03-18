import classes from "./AdminPanelItems.module.css";
import {useContext} from "react";
import {Context} from "../../index";
import {deleteType, fetchTypes} from "../../api/deviceAPI";


const AdminTypeItem = ({item, setTypeVisible, setIsEdit}) => {
    const { device } = useContext(Context);

    const clickEdit = (type) => {
        device.setSelectedType(type);
        setIsEdit(true);
        setTypeVisible(true);
    }
    const clickDelete = (typeId) => {
        deleteType(typeId).then((data) => {
            device.setTypes(data);
        })
    }

    return (
        <li className={classes.adminItemContainer}>
            <div className={classes.adminItemRow}>
                <div>{item.name}</div>
                <div className={classes.adminItemBtnBox}>
                    <button className={classes.adminEditBtn} onClick={() => {clickEdit(item)}}>Edit</button>
                    <button className={classes.adminDeleteBtn} onClick={() => {clickDelete(item.id)}} />
                </div>
            </div>
        </li>
    )
}

export default AdminTypeItem;