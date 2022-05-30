import React, { useState } from "react";
import styles from "./ProductAdder.module.scss";

import CartContext from "../../context/CartContext";
import cartState from "../../utils/cart";

const ProductAdder = ({ id, price }) => {
	const [qtyToAdd, setQtyToAdd] = useState(1);
	const [productCart, setProductCart] = useState(cartState);

	// Click handler for minus button
	// Do not allow zero or negative quantities
	const subtractQty = () => {
		if (qtyToAdd > 1) {
			setQtyToAdd(qtyToAdd - 1);
		}
	};

	// Click handler for plus button
	const addQty = () => setQtyToAdd(qtyToAdd + 1);

	// Clicker handler to submit qtyToAdd to cart
	// Using Context API
	const addToCart = () =>
	{
		const newCart = productCart;
		newCart.addItem(id, qtyToAdd);
		setProductCart(newCart)
	}

	console.log(productCart)

	return (
		<CartContext.Provider value={productCart}>
			<div className={styles.ProductAdder}>
				{/* Convert price in pence into pounds */}
				<h2 className={styles.ProductAdder__price}>£{price / 100}</h2>
				{/* Counter for the quantity to be added to cart */}
				<div className={styles.ProductAdder__counter}>
					<label className={styles.ProductAdder__label}>Qty</label>
					<div className={styles.ProductAdder__mathcontainer}>
						<button
							onClick={subtractQty}
							className={styles.ProductAdder__minus}>
							-
						</button>
						{qtyToAdd}
						<button onClick={addQty} className={styles.ProductAdder__plus}>
							+
						</button>
					</div>
				</div>
				<button onClick={addToCart} className={styles.ProductAdder__adder}>Add to cart</button>
			</div>
		</CartContext.Provider>
	);
};

export default ProductAdder;
