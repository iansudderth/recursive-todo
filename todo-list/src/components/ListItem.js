import React from "react";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import { SortableHandle } from "react-sortable-hoc";
import { ListItem, ListItemText } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import Reorder from "material-ui-icons/Reorder";
import DeleteForever from "material-ui-icons/DeleteForever";
import FormatListBulleted  from "material-ui-icons/FormatListBulleted";
import { black, grey, lightBlue, white } from "material-ui/colors";

const BaseListItem = props => {
	const item = props.value;

	const DragHandle = SortableHandle(() =>
		<IconButton disabled={item.complete}>
			<Reorder />
		</IconButton>
	);
	const incompleteListStyle = { backgroundColor: lightBlue[200] };
	const completeListStyle = { backgroundColor: grey[300] };
	const listItemStyle = item.complete
		? completeListStyle
		: incompleteListStyle;
	const completeGrey = grey[500];
	const completeLineStyle = item.complete
		? { color: completeGrey, textDecoration: "line-through" }
		: {};
	const completeStyle = item.complete ? { color: completeGrey } : {};


	function completeDisplay() {
		var completed = item.completeChildren.length;
		var total = completed + item.incompleteChildren.length;
		if (total === 0) {
			return "";
		} else {
			return (
				<span
					style={completeStyle}
				>{`( ${completed} / ${total} complete)`}</span>
			);
		}
	}

	function content() {
		return (
			<span style={completeLineStyle}>
				{item.content}
			</span>
		);
	}

	return (
		<ListItem divider={true} style={listItemStyle}>
			<DragHandle />
			<Checkbox
				checked={item.complete}
				onClick={props.completeItemComposer(item.id)}
				style={completeStyle}
			/>

			<ListItemText primary={content()} secondary={completeDisplay()} />

			<IconButton
				onClick={props.changeBaseComposer(item.id)}
				style={completeStyle}
			>
				<FormatListBulleted />
			</IconButton>

			<IconButton
				onClick={props.deleteItemComposer(item.id)}
				style={completeStyle}
			>
				<DeleteForever />
			</IconButton>
		</ListItem>
	);
};

BaseListItem.propTypes = {};

export default BaseListItem;
