
import {NavLink} from "react-router-dom";
import {CATALOG_ROUTE} from "../../utils/const";
import classes from './SwiperMain.module.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

import slideImage1 from '../../assets/img/img-slide-1.jpg';
import slideImage2 from '../../assets/img/img-slide-2.jpg';
import slideImage3 from '../../assets/img/img-slide-3.jpg';
import slideImage4 from '../../assets/img/img-slide-4.jpg';
import slideImage5 from '../../assets/img/img-slide-5.jpg';


const SwiperMain = () => {
    SwiperCore.use([Autoplay]);

    const slideImages = [slideImage1, slideImage2, slideImage3, slideImage4, slideImage5];

    return (
        <div className={classes.container}>
            <Swiper
                // install Swiper modules
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                speed={2000}
                pagination={{ clickable: true }}
            >
                {
                    slideImages.map((image) => {
                        return  <SwiperSlide>
                            <NavLink className={classes.item} to={CATALOG_ROUTE}>
                                <img className={classes.image} src={image} alt="slider image"/>
                            </NavLink>
                        </SwiperSlide>})
                }
            </Swiper>
        </div>

    );
};

export default SwiperMain;