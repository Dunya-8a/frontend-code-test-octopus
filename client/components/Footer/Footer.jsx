/* Reusable for other pages */

import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<>
			<footer className={styles.Footer}>
				<p className={styles.Footer__text}>
					Octopus Energy Ltd is a company registered in England and Wales.
					Registered number: 09263424. Registered office: 33 Holborn, London,
					EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
				</p>
			</footer>
		</>
	);
};

export default Footer;
