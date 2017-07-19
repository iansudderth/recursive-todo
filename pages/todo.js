import React, {Component} from 'react'
import App from '../todo-list/src/App.js'
import TodoList from '../todo-list/src/index.js'




class Todo extends Component {
  static getInitialProps (initialProps) {
    return initialProps
  }
  render () {
    return (
      <App>
        <TodoList
        />
      </App>
    )
  }
}

export default Todo
