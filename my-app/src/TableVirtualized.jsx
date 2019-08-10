import React from 'react';
import ReactDOM from 'react-dom';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

const list = [];
for (let i = 0; i < 1000; i++) {
	list.push({ name: 'Brian Vaughn', description: 'Software engineer' });
}

export default class TableVirtualized extends React.Component {
	render() {
		return (
			<Table
				width={300}
				height={300}
				headerHeight={20}
				rowHeight={30}
				rowCount={list.length}
				rowGetter={({ index }) => list[index]}
			>
				<Column label="Name" dataKey="name" width={100} />
				<Column width={200} label="Description" dataKey="description" />
			</Table>
		);
	}
}
