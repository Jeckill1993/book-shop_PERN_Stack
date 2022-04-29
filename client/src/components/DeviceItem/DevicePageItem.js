import classes from './DeviceItem.module.css';

const DevicePageItem = ({ device }) => {

    return (
        <div className={classes.devicePageItem}>
            <div className={'wrapper min'}>
                <div className={classes.devicePageInfo}>
                    <div className={classes.devicePageImage}>
                        <img src={process.env.REACT_APP_CLIENT_API + device.img} alt={'device'}/>
                    </div>
                    <div className={classes.devicePageText}>
                        <h1 className={classes.devicePageName}>{device.name}</h1>
                        <div className={classes.devicePagePrice}><span>Price - </span>{device.price}</div>
                        <div>{device.rating}</div>
                        <button className={classes.devicePageBtn}>Add to Basket</button>

                    </div>
                </div>
                <div>
                    <h2>Device's Information</h2>
                    <ul className={classes.devicePageDescription}>
                        {device.info.map((option) => {
                            return <li>
                                <div>{option.title}</div>
                                <div>{option.description}</div>
                            </li>;
                        })}
                    </ul>
                </div>
                <div>
                    <h2>Reviews</h2>
                    <ul className={classes.reviewsList}>
                        {device.reviews.map((review) => {
                            const { author, text, rating } = review;
                            return <li>
                                <div className={classes.reviewAuthor}>
                                    <div className={classes.reviewImage}>
                                        <img src="" alt=""/>
                                        <span>{author}</span>
                                    </div>
                                </div>
                                <div className={classes.reviewInfo}>
                                    <p className={classes.reviewText}>{text}</p>
                                    <span>{rating}</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DevicePageItem;