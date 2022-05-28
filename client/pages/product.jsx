import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductMain from "../components/ProductMain/ProductMain";
import ProductAdder from "../components/ProductAdder/ProductAdder";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import ProductSpecs from "../components/ProductSpecs/ProductSpecs";

import { GET_ALL_PRODUCTS_API } from "../api/endpoints";

const Product = () => {
	const [productData, setProductData] = useState([]);

	// Fetch the sample data from the server and store it in state
	const fetchProductDetails = () => {
		axios
			.get(GET_ALL_PRODUCTS_API)
			.then((res) => {
				const products = res.data.data.allProducts[0].fields;
				setProductData(products);
			})
			.catch(() => console.log("Error retrieving data from the server"));
	};

	// Call the fetch function at the first render (only)
	useEffect(() => {
		fetchProductDetails();
	}, []);

	console.log(productData);

	return (
		<>
			<div className="product">
				<Header />
				<main>
					<ProductMain product={productData} />
					<ProductAdder price={productData.price} />
					<ProductDescription description={productData.description} />
					<ProductSpecs product={productData} />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Product;
