import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import {useContext} from "react";
import {Context} from "../index";

const AppRouter = () => {
    const { user } = useContext(Context);

    return (
        <div>
            <Routes>
                { user.isAuth && authRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} exact/>
                }) }
                { publicRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} exact/>
                }) }
            </Routes>
        </div>

    );
}

export default AppRouter;
