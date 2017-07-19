import React, {Component} from 'react'
import App from '../todo-list/src/App.js'
import TodoList from '../todo-list/src/index.js'




class Todo extends Component {
  static async getInitialProps ({ query }) {
    return { query }
}

  pageID = this.props.query.params.id || 'null'
  seedState = this.props.query.seedState || undefined

  render () {
    return (
      <App>
        <TodoList
        seedState={this.seedState}
        />
      </App>
    )
  }
}

export default Todo
