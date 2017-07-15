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
import {Reorder, DeleteForever} from 'material-ui-icons'

const BaseListItem = props => {
	const item = props.value;

	const DragHandle = SortableHandle(() =>
		<IconButton><Reorder /></IconButton>
	);

	let completed = item.complete ? style.complete_item : style.incomplete_item;

	const CheckBox = () => {
		return (
			<span
				onClick={props.completeItemComposer(item.id)}
				className={`${style.icon} ${style.check}`}
			>
				{item.complete ? <FaCheckSquare /> : <FaSquareO />}
			</span>
		);
	};

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
			return `( ${completed} / ${total} complete)`;
		}
	}

	return (
		// <li className={`${style.item} ${completed}`}>
			// <div className={style.icons_left}>
				// <DragHandle />
				// <CheckBox />
			// </div>
			// <div
				// className={`${style.content}`}
				// onClick={props.changeBaseComposer(item.id)}
			// >
				// {item.content} {completeDisplay()}
			// </div>
			// <div className={style.icons_right}>
			// <FaTimesCircle
			// onClick={props.deleteItemComposer(item.id)}
			// className = {`${style.delete} ${style.icon}`}
			// />
			// </div>
		// </li>

		<ListItem
		divider={true}
		>
			<DragHandle />
			<Checkbox />
			<ListItemText
			primary={item.content}
			secondary={completeDisplay()}
			/>
			<ListItemSecondaryAction>
				<IconButton>
					<DeleteForever />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

BaseListItem.propTypes = {};

export default BaseListItem;
