import { useContext } from 'react';

import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { deleteDeviceFromBasket, fetchBasket } from '../../api/deviceAPI';

import classes from './Basket.module.css';

const BasketList = observer(() => {
    const { basket } = useContext(Context);

    const devices = basket.basket.item;

    const clickDelete = (deviceId) => {
        deleteDeviceFromBasket(deviceId).then((data) => {
            fetchBasket(basket.basket.id).then((data) => {
                basket.setBasket(data);
            });
        });
    };

    return (
        <div className={classes.container}>
            <div className={'wrapper min'}>
                { devices.length
                    ? <ul>
                        {devices.map((item) => {
                            return <li className={classes.item} key={item.id}>
                                <div className={classes.info}>
                                    <div className={classes.name}>{item.name}</div>
                                    <div className={classes.price}>{item.price}</div>
                                </div>
                                <button className={classes.btn} onClick={() => {
                                    clickDelete(item.id);
                                }}/>
                            </li>;
                        })}
                    </ul>
                    : <p className={classes.emptyText}>Basket is empty</p>
                }

            </div>
        </div>
    );
});

export default BasketList;