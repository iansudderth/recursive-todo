import React from "react";
// import style from './style.css'
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import ListItem from "../ListItem/";

const List = props => {
	function populateList() {
		return props.list[props.baseItem].children.map(id => {
			return props.list[id];
		});
	}

	function populateChildren(childList) {
		if (childList.length == 0) {
			return;
		}
		return childList.map(child => {
			return (
				<ListItem
					key={"child" + child}
					item={props.list[child]}
					changeBaseComposer={props.changeBaseComposer}
					deleteItemComposer={props.deleteItemComposer}
					completeItemComposer={props.completeItemComposer}
				/>
			);
		});
	}
	return (
		<ul>
			{populateList().map(item => {
				return (
					<ListItem
						key={"id" + item.id}
						item={item}
						children={populateChildren(item.children)}
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
