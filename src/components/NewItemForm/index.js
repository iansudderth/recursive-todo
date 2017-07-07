import React, {Component} from 'react'
import style from './style.css'
// import PropTypes from 'prop-types'
// import _ from 'lodash';

class NewItemForm extends Component {
	constructor(props){
		super(props)

		this.state={
			newItem:''
		}
		this.inputUpdate = this.inputUpdate.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}

	submitHandler(event){
		event.preventDefault()
		this.props.newItemAction(this.state.newItem)
		this.setState({newItem:''})
	}

	inputUpdate(event){
		this.setState({newItem: event.target.value})
	}

	render(){
	return(
		<div>
			<form onSubmit={this.submitHandler}>
				<input
				type="text"
				value={this.state.newItem}
				onChange={this.inputUpdate}
				/>
				<input type="submit" value="Make a new Item"/>
			</form>
		</div>
		)
}
}

NewItemForm.propTypes = {

}

export default NewItemForm