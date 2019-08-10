import React from 'react';
import { AutoSizer, List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import 'react-virtualized/styles.css';
// Generate some sample test data
const rows = [];

// Prefilling 50 data
for (let i = 0; i < 1000; i++) {
	rows.push({ name: 'foo', age: '21' });
}

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.cache = new CellMeasurerCache({
			// Define a CellMeasurerCache --> Put the height and width you think are the best
			defaultHeight: 500,
			minHeight: 500,
			fixedWidth: true
		});
	}

	rowRenderer = ({
		key, // Unique key within array of rows
		index, // Index of row within collection
		parent,
		isScrolling, // The List is currently being scrolled --> Important if you need some perf adjustment
		isVisible, // This row is visible within the List (eg it is not an overscanned row)
		style // Style object to be applied to row (to position it)
	}) =>
		rows[index] ? (
			<CellMeasurer cache={this.cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
				<div
					className="Row"
					key={key}
					style={{
						...style,
						display: 'flex'
					}}
				>
					<span style={{ width: 400 }}>{rows[index].name}</span>
					<span style={{ width: 100 }}>{rows[index].age}</span>
				</div>
			</CellMeasurer>
		) : null;

	render() {
		return (
			<AutoSizer>
				{({ height, width }) => (
					<List
						width={width}
						height={height}
						rowGetter={({ index }) => rows[index]}
						rowCount={1000}
						rowHeight={400}
						rowRenderer={this.rowRenderer}
						headerHeight={20}
					/>
				)}
			</AutoSizer>
		);
	}
}
export default Example;
