import classes from "./AdminPanelItems.module.css";
import {useContext} from "react";
import {Context} from "../../index";
import {deleteDevice, fetchDevices} from "../../api/deviceAPI";
import {IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const AdminBrandItem = ({item, setDeviceVisible, setIsEdit}) => {
    const { device } = useContext(Context);

    const clickEdit = (deviceItem) => {
        device.setSelectedDevice(deviceItem);
        setIsEdit(true);
        setDeviceVisible(true);
    }
    const clickDelete = (deviceId) => {
        deleteDevice(deviceId).then((data) => {
            fetchDevices().then((data) => {
                device.setDevices(data.rows);
            });
        })
    }

    return (
        <li className={classes.container}>
            <div className={classes.row}>
                <div>{item.name}</div>
                <div className={classes.btnBox}>
                    <IconButton aria-label="delete" color="dark" onClick={() => { clickEdit(item) }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="dark" onClick={() => { clickDelete(item.id) }}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </li>
    )
}

export default AdminBrandItem;