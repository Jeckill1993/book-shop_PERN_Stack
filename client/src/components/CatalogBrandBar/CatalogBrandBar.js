import classes from './CatalogBrandBar.module.css';

import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../index";

const CatalogBrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={classes.bar}>
            <ul className={classes.list}>
                { device.brands.map((brand) => {
                    return <li className={classes.listItem} key={brand.id}
                               onClick={ () => {device.setSelectedBrand(brand)} }> {brand.name} </li>
                }) }
            </ul>
        </div>
    );
})

export default CatalogBrandBar;