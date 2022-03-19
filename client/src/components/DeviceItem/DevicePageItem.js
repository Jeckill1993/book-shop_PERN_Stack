import classes from "./DeviceItem.module.css";

const DevicePageItem = ({device}) => {

    console.log(device);

    return (
        <div className={classes.devicePageItem}>
            <div className={"wrapper min"}>
                <div className={classes.devicePageInfo}>
                    <div className={classes.devicePageImage}>
                        <img src={process.env.REACT_APP_CLIENT_API + device.img}/>
                    </div>
                    <div className={classes.devicePageText}>
                        <h1 className={classes.devicePageName}>{device.name}</h1>
                        <div className={classes.devicePagePrice}><span>Price - </span>{device.price}</div>
                        <div>{device.rating}</div>
                        <button className={classes.devicePageBtn}>Add to Basket</button>
                    </div>
                </div>
                <ul className={classes.devicePageDescription}>
                    {device.info.map((option) => {
                        return <li>
                            <div>{option.title}</div>
                            <div>{option.description}</div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DevicePageItem;