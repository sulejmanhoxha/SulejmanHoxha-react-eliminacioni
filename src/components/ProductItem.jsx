import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import DataContext from "../context/DataContext";

const ProductItem = ({ item }) => {
	const { id } = useParams();
	const { handleDelete } = useContext(DataContext);

	return (
		<div className="col my-3">
			<div className="card">
				<img
					src={item.thumbnail}
					style={{ height: "200px" }}
					className="card-img-top"
				/>
				<div>
					<div className="card-body border-bottom">
						<h5 className="card-title text-primary">
							{item.title}
						</h5>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item text-success">
							Price: {item.price} $
						</li>
					</ul>
					<div className="card-footer d-flex justify-content-center gap-3">
						<Link
							to={`/product/${item.id}`}
							className="btn btn-primary btn-sm text-nowrap"
						>
							View Details
						</Link>

						<Link
							to={`/product/edit/${item.id}`}
							className="btn btn-success btn-sm text-nowrap"
						>
							Edit Product
						</Link>
						<Link
							onClick={() => {
								handleDelete(item);
							}}
							className="btn btn-danger btn-sm text-nowrap"
						>
							Delete
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
