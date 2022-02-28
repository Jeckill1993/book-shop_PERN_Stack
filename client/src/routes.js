import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEFAULT_ROUTE,
    DEVICE_ROUTE, INCORRECT_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/const";
import { Navigate } from "react-router-dom";

import AdminPanel from "./pages/AdminPanel";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import Auth from "./pages/Auth";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <AdminPanel/>,
    },
    {
        path: BASKET_ROUTE,
        component: <Basket/>,
    },
];

export const publicRoutes = [
    {
        path: DEFAULT_ROUTE,
        component: <Shop/>,
    },
    {
        path: SHOP_ROUTE,
        component: <Shop/>,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: <DevicePage/>,
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth/>,
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth/>,
    },
    {
        path: INCORRECT_ROUTE,
        component: <Navigate to ="/" />,
    },
];