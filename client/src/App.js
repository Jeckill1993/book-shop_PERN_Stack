import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {checkAuth} from "./api/useAPI";
import Loading from "./components/Loading/Loading";
import {fetchBasket} from "./api/deviceAPI";
import theme from "./utils/theme";
import {ThemeProvider} from "@mui/material";

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
            })

        }).finally(() => {
            setLoading(false);
        })
    }, []);

  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <Header/>
              <AppRouter />
              <Footer/>
              { loading ? <Loading/>: '' }
          </ThemeProvider>
      </BrowserRouter>
  );
})

export default App;
