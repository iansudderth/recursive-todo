import React from "react";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import ListItem from "../ListItem/";
import IncompleteList from "../IncompleteList/";
import CompleteList from "../CompleteList/";
import { withStyles, createStyleSheet } from "material-ui/styles";

const styleSheet = createStyleSheet("List", theme => ({
	container: {
		width: "85vw",
		margin: "auto"
	}
}));

const List = props => {
	const itemsList = props.list;
	const baseItem = props.baseItem;
	let completeListItems = itemsList[baseItem].completeChildren;
	let incompleteListItems = itemsList[baseItem].incompleteChildren;

	completeListItems = populateList(completeListItems);
	incompleteListItems = populateList(incompleteListItems);

	function populateList(listArr) {
		return listArr.map(listID => itemsList[listID]);
	}

	const classes = props.classes;

	return (
		<div className={classes.container}>
			<IncompleteList
				items={incompleteListItems}
				parentID={props.baseItem}
				renderChildren={true}
				changeBaseComposer={props.changeBaseComposer}
				deleteItemComposer={props.deleteItemComposer}
				completeItemComposer={props.completeItemComposer}
				reorderItemComposer={props.reorderItemComposer}
			/>
			<CompleteList
				items={completeListItems}
				parentID={props.baseItem}
				renderChildren={true}
				changeBaseComposer={props.changeBaseComposer}
				deleteItemComposer={props.deleteItemComposer}
				completeItemComposer={props.completeItemComposer}
				reorderItemComposer={props.reorderItemComposer}
			/>
		</div>
	);
};

List.propTypes = {};

export default withStyles(styleSheet)(List);
