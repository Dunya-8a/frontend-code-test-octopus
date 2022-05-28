import React from "react";
import styles from "./ProductSpecs.module.scss";

const ProductSpecs = ({
	product: { brand, weight, height, length, width, model_code, colour },
}) => {
	return (
		<div className={styles.ProductSpecs}>
			<h2 className={styles.ProductSpecs__subtitle}>Specifications</h2>
			<table className={styles.ProductSpecs__table}>
				<thead className={"styles.ProductSpecs__table-header"}>
					<tr>
						<td>Specification</td>
						<td>Value</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Brand</td>
						<td>{brand}</td>
					</tr>
					<tr>
						<td>Item weight</td>
						<td>{weight}</td>
					</tr>
					<tr>
						<td>Dimensions</td>
						<td>
							{height} x {length} x {width}
						</td>
					</tr>
					<tr>
						<td>Item Model number</td>
						<td>{model_code}</td>
					</tr>
					<tr>
						<td>Colour</td>
						<td>{colour}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProductSpecs;
