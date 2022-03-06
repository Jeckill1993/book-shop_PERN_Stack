import classes from './AdminPanelNavBar.module.css';


const AdminPanelNavBar = ( { setActiveSection }) => {

    return (
        <div>
            <button onClick={() => {setActiveSection('devices')}}>Devices</button>
            <button onClick={() => {setActiveSection('types')}}>Types</button>
            <button onClick={() => {setActiveSection('brands')}}>Brands</button>
        </div>
    );
}

export default AdminPanelNavBar;
