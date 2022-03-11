import classes from './AdminPanelNavBar.module.css';


const AdminPanelNavBar = ( { setActiveSection }) => {

    return (
        <div className={classes.adminNavBar}>
            <button className={classes.adminNavBarLink} onClick={() => {setActiveSection('devices')}}>Devices</button>
            <button className={classes.adminNavBarLink} onClick={() => {setActiveSection('types')}}>Types</button>
            <button className={classes.adminNavBarLink} onClick={() => {setActiveSection('brands')}}>Brands</button>
        </div>
    );
}

export default AdminPanelNavBar;
