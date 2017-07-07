import React from "react";
import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import FaCheckSquare from "react-icons/lib/fa/check-square";
import FaTimesCircle from "react-icons/lib/fa/times-circle";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const ListItem = props => {
	let children = props.children
		? <ul>
				{props.children}
			</ul>
		: "";
	let completed = props.item.complete ? style.completed : "";

	function handleDelete() {
		confirmAlert({
			title: "Confirm Delete",
			message: `Are you sure you want to delete "${props.item.content}" and all its children?`,
			confirmLabel: "Confirm",
			cancelLabel: "Cancel",
			onConfirm: props.deleteItemComposer(props.item.id),
			onCancel: () => console.log("cancel")
		});
	}

	return (
		<li>
			<span
				onClick={props.changeBaseComposer(props.item.id)}
				className={`${style.item} ${completed}`}
			>
				id: {props.item.id} , content: {props.item.content} ({props.item.children.length})
			</span>
			<FaCheckSquare
				className={`${style.icon} ${style.complete}`}
				onClick={props.completeItemComposer(props.item.id)}
			/>
			<FaTimesCircle
				className={`${style.icon} ${style.delete}`}
				onClick={handleDelete}
			/>
			{children}
		</li>
	);
};

ListItem.propTypes = {};

export default ListItem;
