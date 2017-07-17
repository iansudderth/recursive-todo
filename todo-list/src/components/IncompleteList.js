import React from "react";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";
import {
	SortableContainer,
	SortableElement
} from "react-sortable-hoc";
import ListItem from "./ListItem.js";
import List from "material-ui/List";
import { withStyles, createStyleSheet } from "material-ui/styles";

const styleSheet = createStyleSheet("IncompleteList", theme => ({
	container: {
		listStyle: "none",
		padding: 0,
		margin: 0
	},
	root: {
		padding: 0
	}
}));


const SortableList = SortableContainer((props) => {
	return (
		<List className={props.classForList}>
			{props.items.map((value, index) => {
				return (
					<SortableListItem
						key={`item-${value.id}`}
						index={index}
						value={value}
						changeBaseComposer={props.changeBaseComposer}
						deleteItemComposer={props.deleteItemComposer}
						completeItemComposer={props.completeItemComposer}
					/>
				);
			})}
		</List>
	);
});

const SortableListItem = SortableElement((props) => {
	return (
		<ListItem
			value={props.value}
			changeBaseComposer={props.changeBaseComposer}
			deleteItemComposer={props.deleteItemComposer}
			completeItemComposer={props.completeItemComposer}
		/>
	);
});

const IncompleteList = props => {
	const classes = props.classes;


	function handleSort({ oldIndex, newIndex,}) {
		props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
	}

	return (
		<div>
			<SortableList
				items={props.items}
				useDragHandle={true}
				onSortEnd={handleSort}
				changeBaseComposer={props.changeBaseComposer}
				deleteItemComposer={props.deleteItemComposer}
				completeItemComposer={props.completeItemComposer}
				classForList={classes.root}
			/>
		</div>
	);
};

IncompleteList.propTypes = {};

export default withStyles(styleSheet)(IncompleteList);
