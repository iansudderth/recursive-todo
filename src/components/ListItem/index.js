import React from "react";
import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import FaCheckSquare from "react-icons/lib/fa/check-square";
import FaTimesCircle from "react-icons/lib/fa/times-circle";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import {SortableHandle} from 'react-sortable-hoc'

const ListItem = props => {

	const DragHandle = SortableHandle( () => <span className={style.handle}>::</span> )
	let completed = props.value.complete ? style.completed : ''

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

	function completeDisplay(){
		var completed = props.item.completeChildren.length
		var total = completed + props.item.incompleteChildren.length
		if(total === 0){
			return ''
		} else {
			return `( ${completed} / ${total} complete)`
		}
	}

	return (
		<li className = {`${style.item}` }>
		<DragHandle />
		<span
		className = {`${style.content} ${completed}` }
		onClick = {props.changeBaseComposer(props.value.id)}
		>
		{props.value.content}
		</span>
		</li>
	);
};

ListItem.propTypes = {};

export default ListItem;
