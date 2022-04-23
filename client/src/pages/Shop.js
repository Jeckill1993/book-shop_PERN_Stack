import SwiperMain from '../components/SwiperMain/SwiperMain';
import classes from '../components/SwiperMain/SwiperMain.module.css';

const Shop = () => {
    return (
        <div className="main">
            <h1 className={classes.title}>Welcome to our shop!</h1>
            <SwiperMain/>
        </div>
    );
};

export default Shop;
