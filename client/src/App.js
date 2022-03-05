import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

import "./App.css";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {checkAuth} from "./api/useAPI";
import Loading from "./components/Loading/Loading";

const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        checkAuth().then((data) => {
            user.setUser(data);
            user.setIsAuth(true);
            if (user.role === 'ADMIN') {
                user.setIsAdmin(true);
            }
        }).finally(() => {
            setLoading(false);
        })
    }, []);

  return (
      <BrowserRouter>
          <Header/>
          <AppRouter />
          <Footer/>
          { loading ? <Loading/>: '' }
      </BrowserRouter>
  );
})

export default App;
