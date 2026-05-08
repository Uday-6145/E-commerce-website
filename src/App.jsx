import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./Components/Home"
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import NotFound from "./Components/Not Found";
import LoginForm from "./Components/LoginForm";
import ProtectedRoute from "./Components/ProtectedRoute";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/product" element = {<ProtectedRoute><Products/></ProtectedRoute>}/>
      <Route path="/cart" element = {<ProtectedRoute><Cart/> </ProtectedRoute>}/>
      <Route path="*" element = {<ProtectedRoute><NotFound/></ProtectedRoute>}/>
      <Route path="/login" element = {<LoginForm/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
