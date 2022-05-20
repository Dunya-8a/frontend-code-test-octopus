/* Reusable for other sites */

import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<>
			<header className={styles.Header}>
				<img
					className={styles.Header__logo}
					src="/octopus-logo.svg"
					alt="Octopus Energy logo"
				/>
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
