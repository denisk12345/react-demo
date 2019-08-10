import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TableExample from './TableExample';
import faker from 'faker';
import Example from './Example';
import AutoCompleteVirtualized from './AutoCompleteVirtualized';
import TableVirtualized from './TableVirtualized';

function createRecord(count) {
	let records = [];

	for (let i = 0; i < count; i++) {
		records.push({
			username: faker.internet.userName(),
			email: faker.internet.email()
		});
	}
	return records;
}

const records = createRecord(1000);

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about/">About</Link>
						</li>
						<li>
							<Link to="/users/">Users</Link>
						</li>
						<li>
							<Link to="/table/">table</Link>
						</li>
					</ul>
				</nav>

				<Route path="/" exact component={Example} />
				<Route path="/about/" component={() => <TableExample data={records} />} />
				<Route path="/users" component={AutoCompleteVirtualized} />
				<Route path="/table" component={TableVirtualized} />
			</div>
		</Router>
	);
}

export default App;
