import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductInfo from "./pages/ProductInfo";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return <div>
    <Routes>

    <Route path="/" element = {<HomePage/>}/>
    <Route path="/products" element = {<ProductPage/>}/>
    <Route path="/productsInfo" element = {<ProductInfo/>}/>
    <Route path="/reegister" element = {<RegisterPage/>}/>
    <Route path="/login" element = {<LoginPage/>}/>
</Routes>
    
  </div>;
};

export default App;
