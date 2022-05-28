import React from 'react'
import styles from "./ProductDescription.module.scss";

const ProductDescription = ({description}) => {
  return (
     <div className={styles.productDescription}>
        <h2 className={styles.ProductDescription__subtitle}>Description</h2>
        <p className={styles.ProductDescription__text}>{description}</p>
		</div>
	);
}

export default ProductDescription