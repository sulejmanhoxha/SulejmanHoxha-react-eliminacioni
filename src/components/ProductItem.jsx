import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
	return (
		<div className="col my-3">
			<div className="card">
				<img
					src={item.thumbnail} // Use the item's thumbnail URL
					style={{ height: "200px" }}
					className="card-img-top"
				/>
				<div>
					<div className="card-body border-bottom">
						<h5 className="card-title text-primary">
							{item.title}
						</h5>
						{/* Use the item's title */}
						<div className="card-subtitle text-secondary mb-2">
							{item.brand} {/* Use the item's brand */}
						</div>
						<p className="card-text">
							{item.description.length <= 55
								? item.description
								: `${item.description.slice(0, 55)}...`}
						</p>
						{/* Use the item's description */}
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item text-success">
							Price: {item.price} $ {/* Use the item's price */}
						</li>
						<li className="list-group-item">
							Discount Percentage: {item.discountPercentage}
							{/* Use the item's discountPercentage */}
						</li>
						<li className="list-group-item">Stock: {item.stock}</li>
						{/* Use the item's stock */}
						<li className="list-group-item">
							Category: {item.category}
							{/* Use the item's category */}
						</li>
					</ul>
					<div className="card-footer d-flex justify-content-center gap-3">
						<Link
							to={`/product/${item.id}`}
							className="btn btn-primary btn-sm text-nowrap"
						>
							View Details
						</Link>

						<Link className="btn btn-success btn-sm text-nowrap">
							Edit Product
						</Link>
						<Link className="btn btn-danger btn-sm text-nowrap">
							Delete
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
