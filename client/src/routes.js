import {
    ADMIN_ROUTE,
    BASKET_ROUTE, CATALOG_ROUTE,
    DEFAULT_ROUTE,
    DEVICE_ROUTE, INCORRECT_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, SALES_ROUTE,
    SHOP_ROUTE
} from "./utils/const";
import { Navigate } from "react-router-dom";

import AdminPanel from "./pages/AdminPanel";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import Auth from "./pages/Auth";
import Sales from "./pages/Sales";
import Catalog from "./pages/Catalog";


export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <AdminPanel/>,
    },
]

export const authRoutes = [
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
        path: SALES_ROUTE,
        component: <Sales/>,
    },
    {
        path: CATALOG_ROUTE,
        component: <Catalog/>,
    },
    {
        path: INCORRECT_ROUTE,
        component: <Navigate to ="/" />,
    },
];