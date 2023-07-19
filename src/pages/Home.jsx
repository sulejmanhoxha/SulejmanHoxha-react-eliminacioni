import React, { useState } from "react";
import { useContext } from "react";

import ProductItem from "../components/ProductItem";
import DataContext from "../context/DataContext";

const Home = () => {
	const { items, isLoading, fetchError } = useContext(DataContext);

	const [counter, setCounter] = useState(9); // Initial counter value is 9

	// Slice the items array based on the counter value
	const slicedItems = items.slice(0, counter);

	const handleLoadMore = () => {
		setCounter((prevCounter) => prevCounter + 9); // Increment the counter by 9
	};
	return (
		<>
			<div>
				<div className="container">
					{isLoading && (
						<div className="p-5 h-100 d-flex justify-content-center align-items-center">
							<div
								className="spinner-border text-primary"
								role="status"
							>
								<span className="visually-hidden">
									Loading...
								</span>
							</div>
						</div>
					)}

					{fetchError && (
						<p className="pt-5 display-3 text-danger">
							{fetchError}
						</p>
					)}

					{!fetchError && !isLoading && items.length === 0 && (
						<h2 className="display-2 text-secondary pt-5">
							No items to display
						</h2>
					)}

					{!isLoading && !fetchError && items.length > 0 && (
						<div>
							<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
								{slicedItems.map((item) => (
									<ProductItem key={item.id} item={item} />
								))}
							</div>
							{counter < items.length && (
								<button
									type="button"
									className="btn btn-primary mx-auto d-block btn-lg mt-3 mb-5"
									onClick={handleLoadMore}
								>
									Load More
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
