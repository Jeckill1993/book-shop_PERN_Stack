import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from '@mui/material';

import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

import { checkAuth } from './api/userAPI';
import { fetchBasket } from './api/deviceAPI';

import theme from './utils/theme';

import { Context } from './index';

import './App.css';


const App = observer(() => {
    const { basket } = useContext(Context);
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth().then((data) => {
            user.setUser(data);
            user.setIsAuth(true);
            if (data.role === 'ADMIN') {
                user.setIsAdmin(true);
            }

            fetchBasket(user.user.id).then((data) => {
                basket.setBasket(data);
            });

        }).finally(() => {
            setLoading(false);
        });
    }, [user, basket]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div>
                    <Header/>
                    <AppRouter/>
                </div>
                <Footer/>
                { loading ? <Loading/>: '' }
            </ThemeProvider>
        </BrowserRouter>
    );
});

export default App;
