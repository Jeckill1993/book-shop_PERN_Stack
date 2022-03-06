import AdminPanelNavBar from "../components/AdminPanelNavBar/AdminPanelNavBar";
import AdminPanelContent from "../components/AdminPanelContent/AdminPanelContent";
import {useState} from "react";
import {observer} from "mobx-react-lite";

const AdminPanel = observer(() => {

    const [activeSection, setActiveSection] = useState('devices');

    return (
        <div>
            <h1>AdminPanel</h1>
            <AdminPanelNavBar activeSection={activeSection} setActiveSection={setActiveSection} />
            <AdminPanelContent activeSection={activeSection} />
        </div>
    );
})

export default AdminPanel;
