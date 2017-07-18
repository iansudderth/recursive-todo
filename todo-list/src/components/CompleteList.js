import React from "react";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";
import ListItem from "./ListItem.js";
import List from "material-ui/List";
import { withStyles, createStyleSheet } from "material-ui/styles";
import {primaryColorParser, fadedColorParser} from '../helpers/colorParser.js'

const styleSheet = createStyleSheet("CompleteList", theme => ({
	container: {
		margin: 0,
		padding: 0
	}
}));

const CompleteList = props => {
	const classes = props.classes;

	return (
		<List className={classes.container}>
			{props.items.map(value => {
				return (
					<ListItem
						key={`item-${value.id}`}
						value={value}
						changeBaseComposer={props.changeBaseComposer}
						deleteItemComposer={props.deleteItemComposer}
						completeItemComposer={props.completeItemComposer}
						changeColorComposer ={props.changeColorComposer}
						bgColor={fadedColorParser(value.color)}
					/>
				);
			})}
		</List>
	);
};

CompleteList.propTypes = {};

export default withStyles(styleSheet)(CompleteList);
