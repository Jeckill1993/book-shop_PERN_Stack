import { useContext } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { deleteType } from '../../api/deviceAPI';
import { Context } from '../../index';

import classes from './AdminPanelItems.module.css';


const AdminTypeItem = ({ item, setTypeVisible, setIsEdit }) => {
    const { device } = useContext(Context);

    const clickEdit = (type) => {
        device.setSelectedType(type);
        setIsEdit(true);
        setTypeVisible(true);
    };
    const clickDelete = (typeId) => {
        deleteType(typeId).then((data) => {
            device.setTypes(data);
        });
    };

    return (
        <li className={classes.container}>
            <div className={classes.row}>
                <div className={classes.text}>{item.name}</div>
                <div className={classes.btnBox}>
                    <IconButton aria-label="delete" color="dark" onClick={() => { clickEdit(item); }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="dark" onClick={() => { clickDelete(item.id); }}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </li>
    );
};

export default AdminTypeItem;