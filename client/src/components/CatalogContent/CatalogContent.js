import CatalogBrandBar from '../CatalogBrandBar/CatalogBrandBar';
import DeviceList from '../DeviceList/DeviceList';
import Pagination from '../Pagination/Pagination';

import classes from './CatalogContent.module.css';

const CatalogContent = () => {
    return (
        <div className={classes.content}>
            <CatalogBrandBar />
            <DeviceList />
            <Pagination />
        </div>
    );
};

export default CatalogContent;