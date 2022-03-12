import classes from './CatalogTypeBar.module.css';

import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../index";

const CatalogTypeBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={classes.navigate}>
            <ul>
                { device.types.map((type) => {
                    return <li className={classes.navigateItem} key={type.id}
                               onClick={ () => {device.setSelectedType(type)} }> {type.name} </li>
                }) }
            </ul>
        </div>
    );
})

export default CatalogTypeBar;