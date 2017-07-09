import React from "react";
import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import FaCheckSquare from "react-icons/lib/fa/check-square";
import FaSquareO from "react-icons/lib/fa/square-o";
import FaTimesCircle from "react-icons/lib/fa/times-circle";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import { SortableHandle } from "react-sortable-hoc";

const ListItem = props => {
	const item = props.value;
	const handleStyle = item.complete ? style.handle_complete : style.handle;
	const checkStyle = item.complete ? style.check_complete : style.check;

	const DragHandle = SortableHandle(() =>
		<span className={handleStyle}>::</span>
	);

	let completed = item.complete ? style.completed : "";

	const CheckBox = () => {
		return (
			<span
				onClick={props.completeItemComposer(item.id)}
				className={`${style.icon} ${checkStyle}`}
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
		<li className={`${style.item}`}>
			<DragHandle />
			<CheckBox />
			<span
				className={`${style.content} ${completed}`}
				onClick={props.changeBaseComposer(item.id)}
			>
				{item.content} {completeDisplay()}
			</span>
			<FaTimesCircle onClick={props.deleteItemComposer(item.id)} />
		</li>
	);
};

ListItem.propTypes = {};

export default ListItem;
