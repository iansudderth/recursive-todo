import React, { Component } from "react";
import style from "./style.css";
import PropTypes from "prop-types";
import _ from "lodash";
import ListItem from "../ListItem/";
import List from 'material-ui/List';

const CompleteList = props => {
	return (
		<List>
			{props.items.map(value => {
				return (
					<ListItem
						key={`item-${value.id}`}
						value={value}
						changeBaseComposer={props.changeBaseComposer}
						deleteItemComposer={props.deleteItemComposer}
						completeItemComposer={props.completeItemComposer}
					/>
				);
			})}
		</List>
	);
};

CompleteList.propTypes = {};

export default CompleteList;
