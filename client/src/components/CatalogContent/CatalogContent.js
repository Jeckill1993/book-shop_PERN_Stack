import classes from './CatalogContent.module.css';
import CatalogBrandBar from "../CatalogBrandBar/CatalogBrandBar";
import DeviceList from "../DeviceList/DeviceList";

const CatalogContent = () => {
    return (
        <div className={"catalog-content"}>
            <CatalogBrandBar />
            <DeviceList />
        </div>
    );
}

export default CatalogContent;