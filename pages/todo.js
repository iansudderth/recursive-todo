import React, {Component} from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import App from '../todo-list/src/App.js'
import TodoList from '../todo-list/src/index.js'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
}

class Index extends Component {
  state = {
    open: false
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  };

  handleClick = () => {
    this.setState({
      open: true
    })
  };

  render () {
    return (
      <App>
        <TodoList />
      </App>
    )
  }
}

export default Index
