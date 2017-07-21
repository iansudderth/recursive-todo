import React, {Component} from 'react'
import App from '../todo-list/src/App.js'
import TodoList from '../todo-list/src/index.js'




class Todo extends Component {
  static async getInitialProps ({ query }) {
    return { query }
}

  seedState = this.props.query.initialState
  listID = this.props.query.initialState._id

  render () {
    return (
      <App>
        <TodoList
        seedState={this.seedState}
        listID={this.listID}
        />
      </App>
    )
  }
}

export default Todo
