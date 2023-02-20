import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from "./app/components/ui/navBar/navBar";
import GoodsList from "./app/components/goodsPage/productsList";
import MainPage from "./app/components/pages/mainPage";
import ProductPage from "./app/components/pages/productPage";
import AddProductPage from "./app/components/pages/addProductPage";
import EditProductPage from "./app/components/pages/editProductPage";
import Login from "./app/components/pages/login";
import ShoppingCart from "./app/components/pages/shoppingCart,";
import CatalogPage from "./app/components/pages/catalogPage";

const App = () => {
    return (
        <div>
            <h1>Talyshinskiy App</h1>
            <NavBar/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/catalogPage" component={CatalogPage}/>
                <Route path="/productPage" component={ProductPage}/>
                <Route path="/shoppingCart" component={ShoppingCart}/>
                <Route path="/editProductPage" component={EditProductPage}/>
                <Route path="/addProductPage" component={AddProductPage}/>
                <Route path="/" exact componennt={MainPage}/>
                <Redirect to="/"/>


            </Switch>
            <GoodsList/>
        </div>
    );
};

export default App;
