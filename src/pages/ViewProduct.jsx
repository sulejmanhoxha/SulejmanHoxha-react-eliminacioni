import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api/products";
import DataContext from "../context/DataContext";

const ViewProduct = () => {
	const { items } = useContext(DataContext);
	const [item, setItem] = useState("");
	const { id } = useParams();

	useEffect(() => {
		const foundItem = items.find((item) => item.id === parseInt(id));
		if (foundItem) {
			setItem(foundItem);
		}
	}, [id, items]);

	return (
		<div className="container">
			{!item || !item.images ? (
				<div className="p-5 h-100 d-flex justify-content-center align-items-center">
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div className="card w-100">
					<div className="row g-0">
						<div className="col-lg-4 " style={{ height: "400px" }}>
							<div
								id="carouselExample"
								className="carousel slide"
							>
								<div className="carousel-inner">
									{item.images &&
										item.images.map((image, index) => (
											<div
												className={`carousel-item ${
													index === 0 ? "active" : ""
												}`}
												key={index}
											>
												<img
													src={image}
													className="d-block rounded-start w-100 carousel-image"
													alt={`Image ${index}`}
													style={{ height: "400px" }}
												/>
											</div>
										))}
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#carouselExample"
									data-bs-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									/>
									<span className="visually-hidden">
										Previous
									</span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#carouselExample"
									data-bs-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									/>
									<span className="visually-hidden">
										Next
									</span>
								</button>
							</div>
						</div>
						<div className="col-lg-8 h-100">
							<div className="card-body d-flex flex-column justify-content-between h-100">
								<h5 className="card-title text-primary">
									{item.title}
								</h5>
								<div className="card-subtitle text-secondary mb-2">
									{item.brand}
								</div>
								<p className="card-text">{item.description}</p>

								<ul className="list-group list-group-flush">
									<li className="list-group-item text-success">
										Price: {item.price} $
									</li>
									<li className="list-group-item">
										Discount Percentage:{" "}
										{item.discountPercentage}
									</li>
									<li className="list-group-item">
										Stock: {item.stock}
									</li>
									<li className="list-group-item">
										Category: {item.category}
									</li>
								</ul>
							</div>

							<div className="card-footer d-flex justify-content-center gap-3">
								<Link
									to={`/product/edit/${item.id}`}
									className="btn btn-success btn-sm text-nowrap"
								>
									Edit Product
								</Link>
								<Link className="btn btn-danger btn-sm text-nowrap">
									Delete
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ViewProduct;
