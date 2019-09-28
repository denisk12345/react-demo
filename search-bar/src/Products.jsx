import React, { Component } from 'react';

class Products extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const rows = [];

		const myFilter = (p) =>
			p.name.startsWith(this.props.filterText) &&
			p.visible &&
			(!this.props.isInStock || p.isInStock === this.props.isInStock);

		const myMap = (product, index) => {
			return (
				<tr key={index}>
					<td>{product.name}</td>
					<td>{product.isInStock}</td>
				</tr>
			);
		};
		this.props.products.filter(myFilter).map(myMap).forEach((element) => {
			rows.push(element);
		});
		return (
			<div>
				<table style={{ margin: 'auto' }}>
					<tbody>{rows}</tbody>
				</table>
			</div>
		);
	}
}
export default Products;
