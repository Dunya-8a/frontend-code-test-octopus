import React from "react";
import styles from "./ProductMain.module.scss";

const ProductMain = ({ product: { img_url, name, power, quantity } }) => {

	return (
		<div className={styles.ProductMain}>
			<img src={img_url} alt={name} className={styles.ProductMain__img} />
      <h1 className={styles.ProductMain__title}>{name}</h1>
      <p className={styles.ProductMain__details}>{power} // {quantity}</p>
		</div>
	);
};

export default ProductMain;
