import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Blog from './container/Blog';
import Cart from './container/Cart';
import Category from './container/Category';
import CheckOut from './container/CheckOut';
import Confirmation from './container/Confirmation';
import Contect from './container/Contect';
import Elements from './container/Elements';
import Login from './container/Login';
import SingleBlog from './container/SingleBlog';
import SingleProduct from './container/SingleProduct';
import Tracking from './container/Tracking';
import Home from './container/Home';
import { Route, Switch } from 'react-router-dom';
import CategoryAdmin from './Admin/CategoryAdd/CategoryAdmin';
import { ConfigurStore } from './redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CategoryWiseProduct from './CategoryWiseProduct';
import ProductAdmin from './Admin/ProductAdmin/ProductAdmin';
import productDetails from './container/ProductDetails';
// import MiniDrawer from './Admin/container/Layout';


function App() {
  let { store, persistor } = ConfigurStore()

  return (
    <> 

    
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <MiniDrawer> */}
            <Header />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/Blog"} component={Blog} />
              <Route exact path={"/Cart"} component={Cart} />
              <Route exact path={"/Category"} component={Category} />
              <Route exact path={"/CategoryAdmin"} component={CategoryAdmin} />
              <Route exact path={"/CategoryWiseProduct"} component={CategoryWiseProduct} />
              <Route exact path={"/CheckOut"} component={CheckOut} />
              <Route exact path={"/ProductAdmin"} component={ProductAdmin} />
              <Route exact path={"/Confirmation"} component={Confirmation} />
              <Route exact path={"/Contect"} component={Contect} />
              <Route exact path={"/Elements"} component={Elements} />
              <Route exact path={"/Login"} component={Login} />
              <Route exact path={"/SingleBlog"} component={SingleBlog} />
              <Route exact path={"/SingleProduct"} component={SingleProduct} />
              <Route exact path={"/ProductDetails"} component={productDetails} />
              <Route exact path={"/Tracking"} component={Tracking} />
            </Switch>
            <Footer />
          {/* </MiniDrawer> */}
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
