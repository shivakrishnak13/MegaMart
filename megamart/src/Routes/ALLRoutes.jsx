import {Routes,Route} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SingleProductsPage from "../Pages/SingleProductsPage";
import ProductsPage from "../Pages/ProductsPage"
import FeaturedProductsPage from "../SingleProds/FeaturedSingleProds"
import LadiesProductsPage from "../SingleProds/LadiesSingle";
import MensSinglePage from "../SingleProds/MenSingle";
import BeautySinglePage from "../SingleProds/BeautySingle";
import HomeProdSingle from "../SingleProds/SingleHomeprod";
import LoginPage from "../Pages/Login";
import SignupPage from "../Pages/Signup";
import OtpPage from "../Pages/Otp";
import ApitwoPage from '../Pages/ApiTwo'
import CartPage from "../Pages/CartPage";
import PrivateRoute from "./PrivateRoute";

function ALLRoutes(){

    return <div>
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/category/:cat" element={<ApitwoPage/>}/>  
        <Route path="/products/:id" element={<SingleProductsPage/>} />
        <Route path='/fetured/:id' element={<FeaturedProductsPage/>}/>
        <Route path='/product/:id' element={<LadiesProductsPage/>}/>
        <Route path='/product/mens/:id' element={<MensSinglePage/>}/>
        <Route path='/product/beauty/:id' element={<BeautySinglePage/>}/>
        <Route path='/product/home/:id' element={<HomeProdSingle/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/otp" element={
       
        <OtpPage/>
     
        }/>
        <Route path="/prods" element={<ProductsPage/>}/>
        <Route path="/cart" element={
            <PrivateRoute>
        <CartPage/>
        </PrivateRoute>
        }/>
    </Routes>
    </div>
};

export {ALLRoutes};