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
import {primaryColorParser, fadedColorParser, textColorParser} from '../helpers/colorParser.js'


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
						changeColorComposer ={props.changeColorComposer}
						bgColorComposer={props.bgColorComposer}
						textColorComposer={props.textColorComposer}
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
			changeColorComposer ={props.changeColorComposer}
			itemColor={props.bgColorComposer(props.value.color)}
			textColor={props.textColorComposer(props.value.color, props.value.complete)}
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
				changeColorComposer ={props.changeColorComposer}
				bgColorComposer={primaryColorParser}
				textColorComposer={textColorParser}
			/>
		</div>
	);
};

IncompleteList.propTypes = {};

export default withStyles(styleSheet)(IncompleteList);
