// Initial cart state
const cartState = {
	// Format -> item: quantity
	cart: {},
	cartCount: 0,

	addItem: addItem,
	rmItem: rmItem,
};

// Global functions for adding and removing items to cart
function addItem(itemId, qty) {
	let productId = itemId;
	const newCart = cartState.cart;

	// If the item already exists, only update the quantity
	newCart[productId]
		? (newCart[productId] = newCart[productId] + qty)
		: (newCart[productId] = qty);

	cartState.cart = newCart;
	cartState.cartCount = cartState.cartCount + qty;
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

	cartState.cart = newCart;
	cartState.cartCount = cartState.cartCount - qty;
}

export default cartState;
