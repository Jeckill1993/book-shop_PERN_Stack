import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

import BasketList from '../components/Basket/BasketList';
import { fetchBasket } from '../api/deviceAPI';
import { Context } from '../index';

const Basket = observer(() => {
    const { basket } = useContext(Context);
    const { user } = useContext(Context);

    const userId = user.user.id;

    useEffect(() => {
        fetchBasket(userId).then((data) => {
            basket.setBasket(data);
        });
    }, [userId, basket]);

    return (
        <BasketList />
    );
});

export default Basket;
