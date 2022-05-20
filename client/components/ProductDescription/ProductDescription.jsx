import React from 'react'
import styles from "./ProductDescription.module.scss";

const ProductDescription = () => {
  return (
     <div className={styles.productDescription}>
        <h2 className={styles.ProductDescription__subtitle}>Description</h2>
        <p className={styles.ProductDescription__text}>Description text</p>
		</div>
	);
}

export default ProductDescription