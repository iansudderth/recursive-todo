import React, {Component} from 'react'
import List from '../components/List'
import {connect} from 'react-redux'
import { newItem, changeBaseItem } from '../actions'
import {bindActionCreators} from 'redux'

class TodoContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem:'',
		}
		this.inputUpdate = this.inputUpdate.bind(this)
		this.newItemAction = this.newItemAction.bind(this)
		this.changeBase = this.changeBase.bind(this)
	}

	inputUpdate(event){
		this.setState({newItem: event.target.value})
	}

	newItemAction(){
		var newItemContent = this.state.newItem
		this.props.newItem(newItemContent,this.props.baseItem)
		this.setState({newItem:''})
	}

	changeBase(id){
		var changeBaseItem = this.props.changeBaseItem
		return function(){
			changeBaseItem(id);
			}
	}

	render(){
		return(
			<div>
				<h1>Hello World</h1>
				<a href="#" onClick={this.changeBase('root')}>root</a> <br/>
				<a href="#" onClick={this.changeBase(1001)}>1001</a>
				<br/>
				<input value={this.state.newItem}  onChange={this.inputUpdate}/>
				<button onClick={this.newItemAction}>New Item</button>
				<List list={this.props.items} baseItem={this.props.baseItem}/>
			</div>

			)
	}

}

function mapStateToProps({items, baseItem}){
	return {items, baseItem}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({newItem, changeBaseItem},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)