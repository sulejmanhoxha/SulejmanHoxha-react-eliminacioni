import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
	return (
		<div className="d-flex min-vh-100 align-items-center justify-content-center">
			<div>
				<div className="text-center">
					<span className="display-1 mb-4">404</span>
					<div className="mb-4 lead">
						The page you are looking for was not found.
					</div>
					<Link to="/" className="btn btn-link">
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Missing;
