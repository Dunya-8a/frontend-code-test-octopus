import React from "react";
import styles from "./ProductAdder.module.scss";

const ProductAdder = ({ price }) => {
	return (
		<div className={styles.ProductAdder}>
			{/* Convert price in pence into pounds */}
			<h2 className={styles.ProductAdder__price}>£{price / 100}</h2>
			<div className={styles.ProductAdder__counter}>
				<label className={styles.ProductAdder__label}>Qty</label>
				<div className={styles.ProductAdder__mathcontainer}>
					<button className={styles.ProductAdder__minus}>-</button>1
					<button className={styles.ProductAdder__plus}>+</button>
				</div>
			</div>
			<button className={styles.ProductAdder__adder}>Add to cart</button>
		</div>
	);
};

export default ProductAdder;
