/* Reusable for other pages */

import React, { useContext } from "react";
import styles from "./Header.module.scss";

import CartContext from "../../context/CartContext";

const Header = () => {
	const currCart = useContext(CartContext);
	// console.log(cartCount);
	console.log(currCart);

	return (
		<>
			<header className={styles.Header}>
				<img
					className={styles.Header__logo}
					src="/octopus-logo.svg"
					alt="Octopus Energy logo"
				/>
				<p>{currCart.cartCount}</p>
				<img
					src="/basket.svg"
					alt="Your basket"
					className={styles.Header__basket}
				/>
			</header>
		</>
	);
};

export default Header;
