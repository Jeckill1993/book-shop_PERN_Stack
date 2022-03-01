import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
      <BrowserRouter>
          <Header/>
          <AppRouter />
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
