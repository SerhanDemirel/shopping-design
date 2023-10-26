import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Error from "./pages/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout></MainLayout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="products" element={<Products></Products>}></Route>
            <Route
              path="products/:productId"
              element={<SingleProduct></SingleProduct>}
            ></Route>
            <Route path="posts" element={<Posts></Posts>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
            <Route path="/" element={<MainLayout></MainLayout>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
