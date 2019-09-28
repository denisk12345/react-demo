import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Products from './Products';
import faker from 'faker';
import InfiniteScroll from 'react-infinite-scroll-component';

const rows = [];
for (let i = 0; i < 100000; i++) {
	rows.push({ id: i + '', name: faker.internet.userName(), isInStock: true, visible: true });
}

class SearchProducts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterText: '',
			isInStock: true,
			products: rows.slice(0, 100),
			currentIndex: 0
		};
	}

	myFilter = (p, value) => p.name && p.name.toLowerCase().startsWith(value);

	handleChangeFilter(value) {
		this.setState({ products: rows.filter((p) => this.myFilter(p, value)).slice(0, 100), filterText: value });
	}

	handleChangeStock(value) {
		console.log(value);
		this.setState({ isInStock: value });
	}

	fetchMoreData = () => {
		// a fake async api call like which sends
		// 20 more records in 1.5 secs
		setTimeout(() => {
			this.setState({
				products: this.state.products.concat(
					rows
						.filter((p) => this.myFilter(p, this.state.filterText))
						.slice(this.state.currentIndex, this.state.currentIndex + 100)
				),
				currentIndex: this.state.currentIndex + 10
			});
		}, 1500);
	};

	render() {
		console.log('render', rows.filter((p) => this.myFilter(p, this.state.filterText)).length);
		return (
			<div className="App">
				<p className="App-intro" />

				<SearchBar
					handleChangeFilter={(e) => this.handleChangeFilter(e)}
					handleChangeStock={this.handleChangeStock.bind(this)}
					filterText={this.state.filterText}
					isInStock={this.state.isInStock}
				/>

				<InfiniteScroll
					dataLength={this.state.products.length}
					next={this.fetchMoreData}
					hasMore={true}
					loader={<h4>Loading...</h4>}
				>
					<Products
						filterText={this.state.filterText}
						isInStock={this.state.isInStock}
						products={this.state.products}
					/>
				</InfiniteScroll>
			</div>
		);
	}
}

export default SearchProducts;
