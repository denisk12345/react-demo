import React from 'react';
import { List } from 'react-virtualized';

const height = 700;
const rowHeight = 40;
const width = 800;

export default class ListVirtualized extends React.Component {
	rowRenderer = ({ index, isScrolling, key, style }) => {
		return (
			<div key={key} style={style}>
				<div>{this.props.data[index].username}</div>
				<div>{this.props.data[index].email}</div>
			</div>
		);
	};

	render() {
		return (
			<div>
				<h2>Details</h2>
				<List
					rowCount={this.props.data.length}
					width={width}
					height={height}
					rowHeight={rowHeight}
					rowRenderer={this.rowRenderer}
					overscanRowCount={3}
				/>
			</div>
		);
	}
}
