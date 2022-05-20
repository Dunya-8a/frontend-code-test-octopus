import React from 'react'
import styles from "./ProductMain.module.scss";

const ProductMain = () => {
  return (
    <div className={styles.ProductMain}>
      <img src="" alt="" className={styles.ProductMain__img} />
      <h1 className={styles.ProductMain__title}></h1>
      <p className={styles.ProductMain__details}></p>
    </div>
  )
}

export default ProductMain