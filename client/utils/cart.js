// Initial cart state
const cartState = {
	// Format -> item: quantity
	cart: {},
	cartCount: 0,

	addItem: addItem,
	rmItem: rmItem,
};

// Global functions for adding and removing items to cart
const addItem = (item, qty) => {
	const newCart = cartState.cart;

	// If the item already exists, only update the quantity
	newCart.item ? (newCart.item = newCart.item + qty) : (newCart.item = qty);

	cart = newCart;
	cartState.cartCount = cartState.cartCount + qty;
};

const rmItem = (item, qty) => {
	const newCart = cartState.cart;

	// Remove qty only if item exists in cart
	if (newCart.item) {
		newCart.item = newCart.item - qty;

		// Remove the item completely if all are removed
		if (newCart.item < 1) {
			delete newCart.item;
		}
	}

	cart = newCart;
	cartState.cartCount = cartState.cartCount - qty;
};
