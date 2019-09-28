import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Products from './Products';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterText: '',
			isInStock: false,
			products: [
				{ id: '1', name: 'test', isInStock: false, visible: true, children: [ 2, 3 ] },
				{ id: '2', name: 'apple', isInStock: false, visible: true },
				{ id: '3', name: 'apple in stock', isInStock: true, visible: true },
				{ id: '4', name: 'test', isInStock: false, visible: true, children: [ 5, 6 ] },
				{ id: '5', name: 'apple', isInStock: false, visible: true },
				{ id: '6', name: 'apple in stock', isInStock: true, visible: true }
			]
		};
	}

	handleChangeFilter(value) {
		this.setState({ filterText: value });
	}

	handleChangeStock(value) {
		console.log(value);
		this.setState({ isInStock: value });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro" />

				<SearchBar
					handleChangeFilter={(e) => this.handleChangeFilter(e)}
					handleChangeStock={this.handleChangeStock.bind(this)}
					filterText={this.state.filterText}
					isInStock={this.state.isInStock}
				/>
				<Products
					filterText={this.state.filterText}
					isInStock={this.state.isInStock}
					products={this.state.products}
				/>
			</div>
		);
	}
}

export default App;
