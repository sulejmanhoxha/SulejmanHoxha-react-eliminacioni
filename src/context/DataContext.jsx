import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/products.js";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			try {
				const response = await api.get("/products");
				setItems(
					[...response.data.products].sort((a, b) => b.id - a.id)
				);
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
				}, 500);
			}
		};
		fetchProducts();
	}, []);

	const handleDelete = async (item) => {
		try {
			if (!(item.id > 100)) {
				await api.delete(`/products/${item.id}`);
			}

			const newItemList = items.filter((i) => i.id !== parseInt(item.id));
			setItems(newItemList);
			navigate("/");
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<DataContext.Provider
			value={{
				items,
				setItems,
				fetchError,
				setFetchError,
				isLoading,
				setIsLoading,
				handleDelete,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
