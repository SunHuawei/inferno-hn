// inferno module
import {render} from 'inferno';

// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import App from './App';
import TopNews from './TopNews';
import Jobs from './Jobs';

if (module.hot) {
    require('inferno-devtools');
}

const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
		<Route component={ App }>
            <Route path="/" component={ TopNews } />
            <Route path="/news" component={ TopNews } />
			<Route path="/jobs" component={ Jobs } />
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}

