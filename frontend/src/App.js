import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
//import ProtectedRoute from './components/ProtectedRoute';
//import DashboardScreen from './screens/DashboardScreen';
//import AdminRoute from './components/AdminRoute';


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="grid-container">
      <header className="row">
        <div>
        <Link className="brand" to="/">
            Fresh Food Finder
          </Link>
        </div>
        <div>
        <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
                        {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </header>
      <main> 
        <Routes>
          <Route path="/cart" element={<CartScreen/>}></Route>
          <Route path="/cart/:id?" element={<CartScreen/>}></Route>
          <Route path="/product/:id" element={<ProductScreen/>}></Route>
          <Route path="/signin" element={<SigninScreen/>}></Route>
          <Route path="/register" element={<RegisterScreen/>}></Route>
          <Route path="/payment" element={<PaymentMethodScreen/>}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen/>}></Route>
          <Route path="/order/:id" element={<OrderScreen/>}></Route>
          <Route path="/orderhistory" element={<OrderHistoryScreen/>}></Route>
          <Route path="/profile" element={<PrivateRoute><ProfileScreen/></PrivateRoute>}></Route>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/shipping" element={<ShippingAddressScreen/>}></Route>
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;