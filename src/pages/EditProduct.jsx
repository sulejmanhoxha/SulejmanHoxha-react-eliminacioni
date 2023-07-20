import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api/products";
import DataContext from "../context/DataContext";

const EditProduct = () => {
	const { items, setItems } = useContext(DataContext);

	const navigate = useNavigate();

	const [item, setItem] = useState("");
	const { id } = useParams();

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

	useEffect(() => {
		if (items.length > 0) {
			const foundItem = items.find((item) => item.id === parseInt(id));
			if (foundItem) {
				setItem(foundItem);

				setTitle(foundItem.title);
				setDescription(foundItem.description);
				setPrice(foundItem.price);
				setDiscount(foundItem.discountPercentage);
				setRating(foundItem.rating);
				setStock(foundItem.stock);
				setBrand(foundItem.brand);
				setCategory(foundItem.category);
				setImage1(foundItem.images[0]);
				setImage2(foundItem.images[1]);
				setImage3(foundItem.images[2]);
			}
		}
	}, [id, items]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedProduct = {
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
			if (!(id > 100)) {
				console.log(updatedProduct);
				const response = await api.put(
					`products/${id}`,
					updatedProduct
				);
				console.log(response);
			}

			setItems(
				items.map((item) =>
					item.id === parseInt(id)
						? { ...updatedProduct, id: parseInt(id) }
						: item
				)
			);

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

export default EditProduct;
