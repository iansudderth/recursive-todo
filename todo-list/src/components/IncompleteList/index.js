import React, { Component } from "react";
// import style from "./style.css";
import PropTypes from "prop-types";
import _ from "lodash";
import {
	SortableContainer,
	SortableElement,
	arrayMove
} from "react-sortable-hoc";
import ListItem from "../ListItem/";
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

const IncompleteList = props => {
	const classes = props.classes;

	const SortableListItem = SortableElement(({ value }) => {
		return (
			<ListItem
				value={value}
				changeBaseComposer={props.changeBaseComposer}
				deleteItemComposer={props.deleteItemComposer}
				completeItemComposer={props.completeItemComposer}
			/>
		);
	});

	const SortableList = SortableContainer(({ items }) => {
		return (
			<List className={classes.root}>
				{items.map((value, index) => {
					return (
						<SortableListItem
							key={`item-${value.id}`}
							index={index}
							value={value}
						/>
					);
				})}
			</List>
		);
	});

	function handleSort({ oldIndex, newIndex, collection }, e) {
		props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
	}

	return (
		<ul className={classes.container}>
			<SortableList
				items={props.items}
				useDragHandle={true}
				onSortEnd={handleSort}
			/>
		</ul>
	);
};

IncompleteList.propTypes = {};

export default withStyles(styleSheet)(IncompleteList);
