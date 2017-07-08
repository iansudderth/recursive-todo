import React from "react";
// import style from './style.css'
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import ListItem from "../ListItem/";

const List = props => {
	function populateList() {
		var completeList = props.list[props.baseItem].completeChildren.map(id => {
			return props.list[id]
		});
		var incompleteList = props.list[props.baseItem].incompleteChildren.map(id => {
			return props.list[id]
		});
		return [...incompleteList, ...completeList]
	}

	function buildListItem(id){
		return <ListItem
			key={"child" + id}
			item={props.list[id]}
			changeBaseComposer={props.changeBaseComposer}
			deleteItemComposer={props.deleteItemComposer}
			completeItemComposer={props.completeItemComposer}
		/>
	}

	function populateChildren(parentItem) {
		if (parentItem.completeChildren.length === 0 && parentItem.incompleteChildren.length === 0) {
			return;
		}
		var completeList = parentItem.completeChildren.map(child => {
			return buildListItem(child)
		});
		var incompleteList = parentItem.incompleteChildren.map(child => {
			return buildListItem(child)
		});

		return [...incompleteList, ...completeList]
	}
	return (
		<ul>
			{populateList().map(item => {
				return (
					<ListItem
						key={"id" + item.id}
						item={item}
						children={populateChildren(item)}
						changeBaseComposer={props.changeBaseComposer}
						deleteItemComposer={props.deleteItemComposer}
						completeItemComposer={props.completeItemComposer}
					/>
				);
			})}
		</ul>
	);
};

List.propTypes = {};

export default List;
