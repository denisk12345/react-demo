import React from 'react';
import { render } from 'react-dom';
import Autocomplete from 'react-autocomplete';
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

class AutoCompleteVirtualized extends React.Component {
	constructor() {
		super();

		this.cellHeightCache = new CellMeasurerCache({
			defaultHeight: 42,
			fixedWidth: true
		});

		this.state = {
			searchingFor: '',
			selection: '',
			data: []
		};
		let i = 0;
		while (i < 10000) {
			this.state.data.push({ name: makeName(), id: i });
			i++;
		}
	}

	onSelect = (item) => this.setState({ selection: item });

	renderItem = (item) => {
		return <div>{item.name}</div>;
	};

	renderMenu = (items, searchingFor, autocompleteStyle) => {
		this.cellHeightCache.clearAll();

		const rowRenderer = ({ key, index, parent, style }) => {
			const Item = items[index];
			const onMouseDown = (e) => {
				if (e.button === 0) {
					Item.props.onClick(e);
				}
			};

			return (
				<CellMeasurer cache={this.cellHeightCache} key={key} parent={parent} rowIndex={index}>
					{React.cloneElement(Item, {
						style: {
							...style,
							height: 'auto',
							whiteSpace: 'pre-wrap',
							wordBreak: 'break-word',
							borderBottom: '1px solid grey',
							padding: '5px',
							boxSizing: 'border-box'
						},
						key: key,
						onMouseEnter: null,
						onMouseDown: onMouseDown
					})}
				</CellMeasurer>
			);
		};

		return (
			<List
				rowHeight={this.cellHeightCache.rowHeight}
				height={607}
				rowCount={items.length}
				rowRenderer={rowRenderer}
				width={autocompleteStyle.minWidth || 0}
				style={{
					position: 'absolute',
					backgroundColor: 'white',
					border: '1px solid black',
					height: 'auto',
					maxHeight: '607px',
					overflowY: 'scroll',
					display: items.length ? 'block' : 'none'
				}}
			/>
		);
	};

	render() {
		const searchTerm = this.state.searchingFor;
		let data = searchTerm
			? this.state.data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
			: [];

		return (
			<div>
				<p>Type into the input to search through the randomly generated strings</p>
				<Autocomplete
					renderItem={this.renderItem}
					items={data}
					getItemValue={(item) => item.name}
					value={this.state.searchingFor}
					onChange={(e, value) => this.setState({ searchingFor: value })}
					onSelect={this.onSelect}
					renderMenu={this.renderMenu}
				/>
				<p>selection: {this.state.selection}</p>
			</div>
		);
	}
}

function makeName() {
	const randomLength = Math.floor(Math.random() * 20) + 1;
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < randomLength; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

export default AutoCompleteVirtualized;
