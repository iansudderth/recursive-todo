import React, { Component } from "react";
import List from "../components/List";
import { connect } from "react-redux";
import {
	newItem,
	changeBaseItem,
	completeItem,
	deleteItem,
	reorderItem
} from "../actions";
import { bindActionCreators } from "redux";
import style from "../components/ListItem/style.css";
import NewItemForm from "../components/NewItemForm";

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
	}

	inputUpdate(event) {
		this.setState({ newItem: event.target.value });
	}

	newItemAction(content) {
		this.props.newItem(content, this.props.baseItem);
		this.setState({ newItem: "" });
	}

	changeBaseComposer(id) {
		var changeBaseItem = this.props.changeBaseItem;
		return function() {
			changeBaseItem(id);
		};
	}

	deleteItemComposer(id) {
		let deleteItemDispatch = this.props.deleteItem;
		return function() {
			deleteItemDispatch(id);
		};
	}

	completeItemComposer(id) {
		let completeItemDispatch = this.props.completeItem;
		return function() {
			completeItemDispatch(id);
		};
	}

	reorderItemComposer(id, oldIndex, newIndex) {
		let reorderItemDispatch = this.props.reorderItem;
		return function() {
			reorderItemDispatch(id, oldIndex, newIndex);
		};
	}

	render() {
		var currentItem = this.props.items[this.props.baseItem];
		var parentItem = this.props.items[currentItem.parent];
		return (
			<div>
				<h1>
					{this.props.baseItem === "root"
						? "root"
						: currentItem.content}
				</h1>
				<p
					onClick={this.changeBaseComposer(currentItem.parent)}
					className={style.item}
				>
					{this.props.baseItem === "root" ||
					currentItem.parent === "root"
						? ""
						: `Back to :   ${parentItem.content}`}
				</p>
				<p
					onClick={this.changeBaseComposer("root")}
					className={style.item}
				>
					{this.props.baseItem === "root" ? "" : "Back to Root"}
				</p>

				<br />
				<NewItemForm newItemAction={this.newItemAction} />
				<List
					list={this.props.items}
					baseItem={this.props.baseItem}
					changeBaseComposer={this.changeBaseComposer}
					deleteItemComposer={this.deleteItemComposer}
					completeItemComposer={this.completeItemComposer}
					reorderItemComposer={this.reorderItemComposer}
				/>
			</div>
		);
	}
}

function mapStateToProps({ items, baseItem }) {
	return { items, baseItem };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ newItem, changeBaseItem, completeItem, deleteItem, reorderItem },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
