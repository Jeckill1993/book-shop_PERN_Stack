import classes from './CatalogBrandBar.module.css';

const CatalogBrandBar = ({ device }) => {

    return (
        <div className={classes.bar}>
            <ul className={classes.list}>
                { device.brands.map((brand) => {
                    return <li className={classes.listItem} key={brand.id}
                        onClick={ () => {device.setSelectedBrand(brand);} }> {brand.name} </li>;
                }) }
            </ul>
        </div>
    );
};

export default CatalogBrandBar;