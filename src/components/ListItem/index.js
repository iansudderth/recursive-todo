import React from "react";
import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import FaCheckSquare from "react-icons/lib/fa/check-square";
import FaSquareO from "react-icons/lib/fa/square-o";
import FaTimesCircle from "react-icons/lib/fa/times-circle";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import { SortableHandle } from "react-sortable-hoc";import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import {Reorder, DeleteForever, FormatListBulleted} from 'material-ui-icons'
import { grey, lightBlue } from 'material-ui/colors';


const BaseListItem = props => {
	const item = props.value;

	const DragHandle = SortableHandle(() =>
		<IconButton
		disabled={item.complete}
		>
		<Reorder />
		</IconButton>
	);
	const incompleteListStyle = {backgroundColor:lightBlue[200]}
	const completeListStyle = {backgroundColor:grey[300]}
	const listItemStyle = item.complete? completeListStyle : incompleteListStyle
	const completeGrey = grey[500]
	const completeLineStyle = item.complete? {color:completeGrey, textDecoration : 'line-through'} : {}
	const completeStyle = item.complete? {color:completeGrey} : {}


	function handleDelete() {
		confirmAlert({
			title: "Confirm Delete",
			message: `Are you sure you want to delete "${item.content}" and all its children?`,
			confirmLabel: "Confirm",
			cancelLabel: "Cancel",
			onConfirm: props.deleteItemComposer(item.id),
			onCancel: () => console.log("cancel")
		});
	}

	function completeDisplay() {
		var completed = item.completeChildren.length;
		var total = completed + item.incompleteChildren.length;
		if (total === 0) {
			return "";
		} else {
			return <span style={completeStyle}>{`( ${completed} / ${total} complete)`}</span>;
		}
	}

	function content(){
		return <span style={completeLineStyle} >{item.content}</span>
	}

	return (
		<ListItem
		divider={true}
		style={listItemStyle}
		>
			<DragHandle />
			<Checkbox
			checked={item.complete}
			onClick={props.completeItemComposer(item.id)}
			style={completeStyle}
			/>

			<ListItemText
			primary={content()}
			secondary={completeDisplay()}
			/>

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
