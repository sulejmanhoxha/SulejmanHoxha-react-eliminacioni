import { Route, Routes } from "react-router-dom";

import { DataProvider } from "./context/DataContext.jsx";

import Navbar from "./components/Navbar.jsx";

import AddProduct from "./pages/AddProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";
import Home from "./pages/Home.jsx";
import Missing from "./pages/Missing.jsx";
import ViewProduct from "./pages/ViewProduct.jsx";

function App() {
	return (
		<>
			<DataProvider>
				<Navbar />
				<div className="mb-5"></div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<ViewProduct />} />
					<Route path="/product/edit/:id" element={<EditProduct />} />
					<Route path="/product/add" element={<AddProduct />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</DataProvider>
		</>
	);
}

export default App;
