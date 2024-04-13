import React, { useEffect } from 'react';
import './App.css';
import ProductList from './features/ProductList/components/ProductList';
import NavBar from './features/navBar/NavBar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Protected from "./features/Auth/components/Protected"
import SignUpPage from './pages/SignUpPage';
import { RouterProvider,Link, Route,createBrowserRouter } from 'react-router-dom';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/Auth/AuthSlice';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';

const router=createBrowserRouter([
  {
  path:"/",
  element:<Protected><Home/></Protected>,
  children:[
    {
      path:'/',
      element:<ProductList/>
    },
    {
    path:"/product-detail/:id",
    element:<Protected><ProductDetailsPage/></Protected>
    }]
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/signUp",
    element:<SignUpPage/>
  },
  {
    path:"/cart",
    element:<Protected><CartPage/></Protected>
  },
  {
    path:"/checkOut",
    element:<Protected><CheckoutPage/></Protected>
  },
  {
    path:'*',
    element:<PageNotFound/>
  },
  {
    path:"order-success/:id",
    element:<OrderSuccessPage/>
  }
])


function App() {
    const dispatch=useDispatch()
    const user=useSelector(selectLoggedInUser)

  useEffect(()=>{
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch,user])
  return(<div>
    <RouterProvider router={router}></RouterProvider>
  </div>)
}

export default App;
