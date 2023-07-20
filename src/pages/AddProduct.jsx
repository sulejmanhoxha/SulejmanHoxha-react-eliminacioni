import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/products";
import DataContext from "../context/DataContext";

const AddProduct = () => {
	const { items, setItems } = useContext(DataContext);

	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState("");
	const [rating, setRating] = useState("");
	const [stock, setStock] = useState("");
	const [brand, setBrand] = useState("");
	const [category, setCategory] = useState("");
	const [image1, setImage1] = useState("");
	const [image2, setImage2] = useState("");
	const [image3, setImage3] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const newProduct = {
			id: id,
			title: title,
			description: description,
			price: parseFloat(price),
			discountPercentage: parseFloat(discount),
			rating: parseFloat(rating),
			stock: parseInt(stock),
			brand: brand,
			category: category,
			thumbnail: image1,
			images: [image1, image2, image3],
		};

		try {
			const response = await api.post("products/add", newProduct);

			const allPosts = [response.data, ...items];
			setItems(allPosts);
			setTitle("");
			setDescription("");
			setPrice("");
			setDiscount("");
			setRating("");
			setStock("");
			setBrand("");
			setCategory("");
			setImage1("");
			setImage2("");
			setImage3("");
			navigate("/");
		} catch (err) {
			if (err.response) {
				console.log(err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);
			} else {
				console.log(`Error: ${err.message}`);
			}
		}
	};

	// {
	// 	"id": 6,
	// 	"title": "MacBook Pro",
	// 	"description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
	// 	"price": 1749,
	// 	"discountPercentage": 11.02,
	// 	"rating": 4.57,
	// 	"stock": 83,
	// 	"brand": "Apple",
	// 	"category": "laptops",
	// 	"thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
	// 	"images": [
	// 	  "https://i.dummyjson.com/data/products/6/1.png",
	// 	  "https://i.dummyjson.com/data/products/6/2.jpg",
	// 	  "https://i.dummyjson.com/data/products/6/3.png",
	// 	  "https://i.dummyjson.com/data/products/6/4.jpg"
	// 	]
	//   }

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingTitleInput"
						placeholder="IPhone 13"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label htmlFor="floatingTitleInput">Title</label>
				</div>

				<div className="form-floating mb-3">
					<textarea
						className="form-control "
						style={{ height: "100px" }}
						id="floatingDescriptionInput"
						placeholder="Product Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<label htmlFor="floatingDescriptionInput">
						Description
					</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="number"
						className="form-control"
						id="floatingPriceInput"
						placeholder="Price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<label htmlFor="floatingPriceInput">Price</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="number"
						className="form-control"
						id="floatingDiscountInput"
						placeholder="Discount"
						value={discount}
						onChange={(e) => setDiscount(e.target.value)}
					/>
					<label htmlFor="floatingDiscountInput">Discount</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="number"
						className="form-control"
						id="floatingRatingInput"
						placeholder="Rating"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
					/>
					<label htmlFor="floatingRatingInput">Rating</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="number"
						className="form-control"
						id="floatingStockInput"
						placeholder="Stock"
						value={stock}
						onChange={(e) => setStock(e.target.value)}
					/>
					<label htmlFor="floatingStockInput">Stock</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingBrandInput"
						placeholder="Brand"
						value={brand}
						onChange={(e) => setBrand(e.target.value)}
					/>
					<label htmlFor="floatingBrandInput">Brand</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingCategoryInput"
						placeholder="Category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
					<label htmlFor="floatingCategoryInput">Category</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingImage1Input"
						placeholder="Image URL 1"
						value={image1}
						onChange={(e) => setImage1(e.target.value)}
					/>
					<label htmlFor="floatingImage1Input">Image URL 1</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingImage2Input"
						placeholder="Image URL 2"
						value={image2}
						onChange={(e) => setImage2(e.target.value)}
					/>
					<label htmlFor="floatingImage2Input">Image URL 2</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingImage3Input"
						placeholder="Image URL 3"
						value={image3}
						onChange={(e) => setImage3(e.target.value)}
					/>
					<label htmlFor="floatingImage3Input">Image URL 3</label>
				</div>

				<button
					className="btn btn-lg btn-primary d-block mx-auto"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
