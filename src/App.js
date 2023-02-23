import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./app/components/ui/navBar/navBar";
import MainPage from "./app/components/pages/mainPage/mainPage";
import AddProductPage from "./app/components/pages/productsPage/addProductPage";
import EditProductPage from "./app/components/pages/productsPage/editProductPage";
import Login from "./app/components/pages/login/login";
import ShoppingCart from "./app/components/pages/shoppingCart/shoppingCart";
// import Catalog from "./app/components/pages/catalog";
import Contacts from "./app/components/pages/contacts/contacts";
import Page404 from "./app/components/pages/page404/page404";
import Products from "./app/components/pages/productsPage/products";
import About from "./app/components/pages/about/about";

const App = () => {
  return (
    <div>
      <h1>Talyshinskiy App</h1>
      <NavBar />
      <Switch>
        <Route path="/products/:productId?/:edit?" component={Products} />
        {/* <Route path="/catalog" component={Catalog} /> */}
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/shoppingCart" component={ShoppingCart} />
        <Route path="/editProductPage" component={EditProductPage} />
        <Route path="/addProductPage" component={AddProductPage} />
        <Route path="/about" component={About} />
        <Route path="/" exact componennt={MainPage} />
        <Redirect to="/" component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
