import classes from "./AdminPanelItems.module.css";


const AdminBrandItem = ({item, setDeviceVisible, setIsEdit}) => {
    const clickEdit = () => {
        setIsEdit(true);
        setDeviceVisible(true);
    }

    return (
        <li className={classes.adminItemContainer}>
            <div className={classes.adminItemRow}>
                <div>{item.name}</div>
                <div className={classes.adminItemBtnBox}>
                    <button className={classes.adminEditBtn} onClick={() => {clickEdit()}}>Edit</button>
                    <button className={classes.adminDeleteBtn} />
                </div>
            </div>
        </li>
    )
}

export default AdminBrandItem;