import React from "react";
import styles from "./ProductSpecs.module.scss";

const ProductSpecs = () => {
	return (
		<div classname={styles.ProductSpecs}>
			<h2 classname={styles.ProductSpecs__subtitle}>Specifications</h2>
			<div classname={styles.ProductSpecs__grid}>
				<div>Brand</div>
				<div>Item weight</div>
				<div>Dimensions</div>
				<div>Item Model number</div>
				<div>Colour</div>
				<div></div>
			</div>
		</div>
	);
};

export default ProductSpecs;
