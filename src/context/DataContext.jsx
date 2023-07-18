import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

import api from "../api/products.js";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	return (
		<DataContext.Provider
			value={{
				products,
				setProducts,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
