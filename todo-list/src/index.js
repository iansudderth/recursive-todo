import React from "react";
// import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./App";
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import { MuiThemeProvider } from 'material-ui/styles';
import TodoContainer from './containers/TodoContainer.js'


const createStoreWithMiddleware = composeWithDevTools(
	applyMiddleware(ReduxPromise)
)(createStore);

const Boiler = () =>
	<Provider store={createStoreWithMiddleware(reducers)}>
		<TodoContainer />
	</Provider>;

// ReactDOM.render(<Boiler />, document.getElementById("root"));
// registerServiceWorker();

export default Boiler