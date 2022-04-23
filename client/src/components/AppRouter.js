import { Routes, Route } from 'react-router-dom';

import { useContext } from 'react';

import { observer } from 'mobx-react-lite';

import { adminRoutes, authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';


const AppRouter = observer(() => {
    const { user } = useContext(Context);

    return (
        <div>
            <Routes>
                { user.isAuth && authRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} exact/>;
                }) }
                { user.isAdmin && adminRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} exact/>;
                }) }
                { publicRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} exact/>;
                }) }
            </Routes>
        </div>

    );
});

export default AppRouter;
