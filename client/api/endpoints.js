// Endpoint for connecting to the GraphQL server
const HOST = "http://localhost:3001";

// GraphQL query that returns the sample data for the frontend
const GET_ALL_PRODUCTS_API = `${HOST}/graphql?query={allProducts{fields}}`;

module.exports = {
	GET_ALL_PRODUCTS_API,
};