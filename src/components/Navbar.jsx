import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Phone Store
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse d-lg-flex justify-content-end"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<Link className="nav-link" to="/">
							Products
						</Link>
						<Link
							className="nav-link text-nowrap"
							to="/product/add"
						>
							Add Product
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
