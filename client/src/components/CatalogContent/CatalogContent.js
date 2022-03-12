import classes from './CatalogContent.module.css';
import CatalogBrandBar from "../CatalogBrandBar/CatalogBrandBar";
import DeviceList from "../DeviceList/DeviceList";
import Pagination from "../Pagination/Pagination";

const CatalogContent = () => {
    return (
        <div className={classes.content}>
            <CatalogBrandBar />
            <DeviceList />
            <Pagination />
        </div>
    );
}

export default CatalogContent;