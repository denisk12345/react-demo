import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListVirtualized from './ListVirtualized';
import faker from 'faker';
import AutoSizerList from './AutoSizerList';
import AutoCompleteVirtualized from './AutoCompleteVirtualized';
import TableVirtualized from './TableVirtualized';
import InfiniteScroll from './InfiniteScroll2';
import InfiniteScroller from './InfiniteScroller';
import SearchProducts from './SearchProducts';

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
							<Link to="/">InfiniteScroll</Link>
						</li>
						<li>
							<Link to="/ListVirtualized/">ListVirtualized</Link>
						</li>
						<li>
							<Link to="/AutoSizerList/">AutoSizerList</Link>
						</li>
						<li>
							<Link to="/AutoCompleteVirtualized/">AutoCompleteVirtualized</Link>
						</li>
						<li>
							<Link to="/TableVirtualized/">TableVirtualized</Link>
						</li>
						<li>
							<Link to="/InfiniteScroller/">InfiniteScroller</Link>
						</li>
						<li>
							<Link to="/SearchProducts/">SearchProducts</Link>
						</li>
					</ul>
				</nav>

				<Route path="/" exact component={InfiniteScroll} />
				<Route path="/InfiniteScroller" exact component={InfiniteScroller} />
				<Route path="/ListVirtualized/" component={() => <ListVirtualized data={records} />} />
				<Route path="/AutoCompleteVirtualized" component={AutoCompleteVirtualized} />
				<Route path="/TableVirtualized" component={TableVirtualized} />
				<Route path="/AutoSizerList" component={AutoSizerList} />
				<Route path="/SearchProducts" component={SearchProducts} />
			</div>
		</Router>
	);
}

export default App;
