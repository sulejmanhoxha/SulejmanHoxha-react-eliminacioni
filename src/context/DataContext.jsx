import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

import api from "../api/products.js";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await api.get("/products");
				setItems(response.data);
				console.log(items);
			} catch (err) {
				// if this is not in the 200 response range
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else {
					console.log(`Error: ${err.message}`);
				}
			}
		};
		fetchProducts();
	}, []);

	return (
		<DataContext.Provider
			value={{
				items,
				setItems,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
