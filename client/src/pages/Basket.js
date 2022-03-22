import BasketList from "../components/Basket/BasketList";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {fetchBasket} from "../api/deviceAPI";
import {Context} from "../index";

const Basket = observer(() => {
    const { basket } = useContext(Context);
    const { user } = useContext(Context);

    useEffect(() => {
        fetchBasket(user.user.id).then((data) => {
            basket.setBasket(data);
        })
    }, [])

    return (
        <BasketList />
    );
})

export default Basket;
