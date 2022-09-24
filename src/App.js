import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";
import Signup from "./views/auth/Signup";
import Login from "./views/auth/Login";
import PrivateView from "./views/PrivateView";
import IsPrivate from "./components/IsPrivate";
import CreateProduct from "./views/CreateProduct";
import Profile from "./views/Profile";
import IsAdmin from "./components/IsAdmin";
import EditProduct from "./views/EditProduct";
import Products from "./views/Products";
import ProductDetails from "./views/products/ProductDetails";
import Cart from "./views/Cart";
import About from "./views/About";
import Search from "./views/Search";
import Iphone from './views/products/Iphone'
import Watch from './views/products/Watch'
import AirPods from './views/products/AirPods'
import Mac from './views/products/Mac.jsx'
function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={true} />
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/create"
          element={
            <IsAdmin>
              <CreateProduct />
            </IsAdmin>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/private"
          element={
            <IsAdmin>
              <PrivateView />
            </IsAdmin>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <IsAdmin>
              <EditProduct />
            </IsAdmin>
          }
        />
        <Route path='/mac' element={<Mac />} />
        <Route path='/airpods' element={<AirPods />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/iPhone' element={<Iphone />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
