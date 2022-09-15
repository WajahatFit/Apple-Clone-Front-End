import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import EditProject from "./views/EditProduct";
import ErrorPage from "./views/ErrorPage";
import Signup from "./views/auth/Signup";
import Login from "./views/auth/Login";
import PrivateView from "./views/PrivateView";
import IsPrivate from "./components/IsPrivate";
import CreateProduct from "./views/CreateProduct";
import Profile from "./views/Profile";
import IsAdmin from "./components/isAdmin";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/login"
          element={
            <Login />
          }
          />
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
              <EditProject />
            </IsAdmin>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
