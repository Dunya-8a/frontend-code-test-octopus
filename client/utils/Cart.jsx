import React, { useState } from "react";
import CartContext from "../context/CartContext";

// Global Cart from which multiple contexts can be created

const Cart = ({ children }) => {
	const initialState = {
		// Format -> item: quantity
		cart: {},
		cartCount: 0,

		addItem: addItem,
		rmItem: rmItem,
	};

	const [cartState, setCartState] = useState(initialState);

	// Global functions for adding and removing items to cart
	function addItem(itemId, qty) {
		const newCart = cartState.cart;

		// If the item already exists, only update the quantity
		newCart[itemId]
			? (newCart[itemId] = newCart[itemId] + qty)
			: (newCart[itemId] = qty);

		setCartState({
			...cartState,
			cart: newCart,
			cartCount: getCartCount(),
		});
	}

	function rmItem(itemId, qty) {
		const newCart = cartState.cart;

		// Remove qty only if item exists in cart
		if (newCart[itemId]) {
			newCart[itemId] = newCart[itemId] - qty;

			// Remove the item completely if all are removed
			if (newCart[itemId] < 1) {
				delete newCart[itemId];
			}
		}

		setCartState({
			...cartState,
			cart: newCart,
			cartCount: getCartCount(),
		});
	}

	function getCartCount() {
		const count = 0;

		// Add the quantities of all the products in the cart
		const quantities = Object.values(cartState.cart);
		quantities.forEach((value) => (count += value));

		return count;
	}

	return (
		<CartContext.Provider value={cartState}>{children}</CartContext.Provider>
	);
};

export default Cart;
