import classes from "./AdminPanelItems.module.css";
import {useContext} from "react";
import {Context} from "../../index";
import {deleteBrand, fetchBrands} from "../../api/deviceAPI";


const AdminBrandItem = ({item, setBrandVisible, setIsEdit}) => {
    const { device } = useContext(Context);

    const clickEdit = (brand) => {
        device.setSelectedBrand(brand);
        setIsEdit(true);
        setBrandVisible(true);
    }
    const clickDelete = (brandId) => {
        deleteBrand(brandId).then((data) => {
            fetchBrands().then((data) => {
                device.setBrands(data);
            });
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

export default AdminBrandItem;