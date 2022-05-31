import React, { useContext, useState } from "react";
import styles from "./ProductAdder.module.scss";

import CartContext from "../../context/CartContext";

const ProductAdder = ({ id, price }) => {
	const [qtyToAdd, setQtyToAdd] = useState(1);

	// Use Context API to share cart contents globally
	const currCart = useContext(CartContext);

	// Click handler for minus button
	const subtractQty = () => {
		// Do not allow zero or negative quantities
		if (qtyToAdd > 1) {
			setQtyToAdd(qtyToAdd - 1);
		}
	};

	// Click handler for plus button
	const addQty = () => setQtyToAdd(qtyToAdd + 1);

	// Click handler to submit qtyToAdd to cart
	const addToCart = () => currCart.addItem(id, qtyToAdd);

	return (
		<div className={styles.ProductAdder}>
			{/* Convert price in pence into pounds */}
			<h2 className={styles.ProductAdder__price}>£{price / 100}</h2>
			{/* Counter for the quantity to be added to cart */}
			<div className={styles.ProductAdder__counter}>
				<label className={styles.ProductAdder__label}>Qty</label>
				<div
					title="Current quantity"
					className={styles.ProductAdder__mathcontainer}>
					<button onClick={subtractQty} className={styles.ProductAdder__minus}>
						-
					</button>
					{qtyToAdd}
					<button onClick={addQty} className={styles.ProductAdder__plus}>
						+
					</button>
				</div>
			</div>
			<button onClick={addToCart} className={styles.ProductAdder__adder}>
				Add to cart
			</button>
		</div>
	);
};

export default ProductAdder;
