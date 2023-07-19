import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

import api from "../api/products.js";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			try {
				const response = await api.get("/products");
				setItems(response.data.products);
			} catch (err) {
				// if this is not in the 200 response range
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else {
					console.log(`Error: ${err.message}`);
				}
				setFetchError(`Error: ${err.message}`);
			} finally {
				// Simulate a 2-second delay before setting isLoading to false
				setTimeout(() => {
					setIsLoading(false);
				}, 2000);
			}
		};
		fetchProducts();
	}, []);

	return (
		<DataContext.Provider
			value={{
				items,
				setItems,
				fetchError,
				setFetchError,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
