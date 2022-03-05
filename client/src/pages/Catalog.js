import CatalogTypeBar from "../components/TypeBar/CatalogTypeBar";
import CatalogContent from "../components/CatalogContent/CatalogContent";

const Catalog = () => {
    return (
        <div className="catalog-container">
            <CatalogTypeBar/>
            <CatalogContent/>
        </div>
    );
}

export default Catalog;
