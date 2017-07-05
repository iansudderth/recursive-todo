import globalStyle from "./style/global-style.css"

import React, { Component } from 'react';
import TodoContainer from './containers/TodoContainer.js'

class App extends Component {
  render() {
    return (
      <div>
      <TodoContainer />
      </div>
    );
  }
}

export default App;
