import classes from './AdminPanelContent.module.css';
import {useContext} from "react";
import {Context} from "../../index";


const AdminPanelContent = ({activeSection}) => {
    const {devices} = useContext(Context);

    return (
        <div>
            AdminPanelContent
        </div>
    );
}

export default AdminPanelContent;
