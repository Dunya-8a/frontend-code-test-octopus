import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductMain from "../components/ProductMain/ProductMain";
import ProductAdder from "../components/ProductAdder/ProductAdder";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import ProductSpecs from "../components/ProductSpecs/ProductSpecs";

const Product = () => {
	return (
		<>
			<div className="product">
				<Header />
				<main>
					<ProductMain />
					<ProductAdder />
					<ProductDescription />
					<ProductSpecs />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Product;
