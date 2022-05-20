import React from "react";
import styles from "./ProductAdder.module.scss";

const ProductAdder = () => {
	return (
		<div className={styles.ProductAdder}>
			<h2 className={styles.ProductAdder__price}>Price</h2>
			<div className={styles.ProductAdder__counter}>Quantity Counter</div>
			<button className={styles.ProductAdder__adder}>Add to cart</button>
		</div>
	);
};

export default ProductAdder;
