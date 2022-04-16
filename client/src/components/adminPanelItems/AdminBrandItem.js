import classes from "./AdminPanelItems.module.css";
import {useContext} from "react";
import {Context} from "../../index";
import {deleteBrand, fetchBrands} from "../../api/deviceAPI";
import {IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const AdminBrandItem = ({item, setBrandVisible, setIsEdit}) => {
    const { device } = useContext(Context);

    const clickEdit = (brand) => {
        device.setSelectedBrand(brand);
        setIsEdit(true);
        setBrandVisible(true);
    }
    const clickDelete = (brandId) => {
        deleteBrand(brandId).then((data) => {
            device.setBrands(data);
        })
    }

    return (
        <li className={classes.container}>
            <div className={classes.row}>
                <div className={classes.text}>{item.name}</div>
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