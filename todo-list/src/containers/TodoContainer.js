import React, { Component } from "react";
import List from "../components/List";
import { connect } from "react-redux";
import {
	newItem,
	changeBaseItem,
	completeItem,
	deleteItem,
	reorderItem,
	changeColor,
	updateItem,
	updateData
} from "../actions";
import { bindActionCreators } from "redux";
// import style from "../components/ListItem/style.css";
import ListHeader from "../components/ListHeader.js";
import Card from "material-ui/Card";

class TodoContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: ""
		};
		this.inputUpdate = this.inputUpdate.bind(this);
		this.newItemAction = this.newItemAction.bind(this);
		this.changeBaseComposer = this.changeBaseComposer.bind(this);
		this.completeItemComposer = this.completeItemComposer.bind(this);
		this.deleteItemComposer = this.deleteItemComposer.bind(this);
		this.reorderItemComposer = this.reorderItemComposer.bind(this);
		this.generateComplete = this.generateComplete.bind(this);
		this.changeColorComposer = this.changeColorComposer.bind(this);
		this.updateItemDispatch = this.updateItemDispatch.bind(this);
		this.updateDataDispatch = this.updateDataDispatch.bind(this);
	}

	inputUpdate(event) {
		this.setState({ newItem: event.target.value });
	}

	newItemAction(content) {
		this.props.newItem(content, this.props.baseItem);
		var updateDataDispatch = this.updateDataDispatch
		this.setState({ newItem: "" }, () => {
			updateDataDispatch()
		});
	}

	changeBaseComposer(id) {
		var changeBaseItem = this.props.changeBaseItem;
		return function() {
			changeBaseItem(id);
		};
	}

	deleteItemComposer(id) {
		let deleteItemDispatch = this.props.deleteItem;
		let updateDataDispatch = this.updateDataDispatch
		return function() {
			deleteItemDispatch(id);
			updateDataDispatch()
		};
	}

	completeItemComposer(id) {
		let completeItemDispatch = this.props.completeItem;
		let updateDataDispatch = this.updateDataDispatch
		return function() {
			completeItemDispatch(id);
			updateDataDispatch()
		};
	}

	reorderItemComposer(id, oldIndex, newIndex) {
		let reorderItemDispatch = this.props.reorderItem;
		let updateDataDispatch = this.updateDataDispatch;
		return function() {
			reorderItemDispatch(id, oldIndex, newIndex);
			updateDataDispatch()
		};
	}

	generateComplete() {
		var completeCount = this.props.items[this.props.baseItem]
			.completeChildren.length;
		var totalCount =
			this.props.items[this.props.baseItem].incompleteChildren.length +
			completeCount;
		return `( ${completeCount} / ${totalCount} Complete )`;
	}

	changeColorComposer(id, color) {
		let changeColorDispatch = this.props.changeColor
		let updateDataDispatch = this.updateDataDispatch;
		return function (){
			changeColorDispatch(id, color)
			updateDataDispatch()
		}
	}

	updateItemDispatch(id, newText){
		this.props.updateItem(id, newText)
		this.updateDataDispatch()
	}

	updateDataDispatch(){
		const id = this.props.listID
		const newState = {
			items:this.props.items,
			baseItem:this.props.baseItem
		}
		this.props.updateData(id, {id,newState})
	}

	render() {
		var currentItem = this.props.items[this.props.baseItem];
		var parentItem = this.props.items[currentItem.parent];
		return (
			<Card style={{ margin: "auto", margin: "16px" }}>
				<ListHeader
					baseItem={this.props.baseItem}
					baseItemText={currentItem.content}
					currentParent={currentItem.parent}
					changeBaseComposer={this.changeBaseComposer}
					counterText={this.generateComplete()}
					items={this.props.items}
					newItemAction={this.newItemAction}
				/>
				<List
					list={this.props.items}
					baseItem={this.props.baseItem}
					changeBaseComposer={this.changeBaseComposer}
					deleteItemComposer={this.deleteItemComposer}
					completeItemComposer={this.completeItemComposer}
					reorderItemComposer={this.reorderItemComposer}
					changeColorComposer ={this.changeColorComposer}
					updateItem={this.updateItemDispatch}
				/>
			</Card>
		);
	}
}

function mapStateToProps({ items, baseItem }) {
	return { items, baseItem };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ newItem, changeBaseItem, completeItem, deleteItem, reorderItem, changeColor, updateItem, updateData },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
