import "../asset/index.scss";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Home from "../pages/Home";
import Footer from "./footer/Footer";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import CheckOut from "../pages/CheckOut";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/products" element={<Products />} />
				<Route path="/product_detail/:id" element={<ProductDetail />} />
				<Route path="/checkout" element={<CheckOut />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
