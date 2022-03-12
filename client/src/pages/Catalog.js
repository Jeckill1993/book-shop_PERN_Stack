import CatalogTypeBar from "../components/TypeBar/CatalogTypeBar";
import CatalogContent from "../components/CatalogContent/CatalogContent";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../api/deviceAPI";


const Catalog = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => {
            device.setTypes(data);
        });
        fetchBrands().then((data) => {
            device.setBrands(data);
        });
        fetchDevices().then((data) => {
            device.setDevices(data.rows);
        })
    }, [])

    return (
        <div className="catalog-container">
            <CatalogTypeBar/>
            <CatalogContent/>
        </div>
    );
})

export default Catalog;
