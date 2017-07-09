import React, { Component } from "react";
import style from "./style.css";
import PropTypes from "prop-types";
import _ from "lodash";
import {
	SortableContainer,
	SortableElement,
	arrayMove
} from "react-sortable-hoc";
import ListItem from "../ListItem/";

const IncompleteList = props => {
	const SortableListItem = SortableElement(({ value }) => {
		return (
			<ListItem
				value={value}
				changeBaseComposer={props.changeBaseComposer}
				deleteItemComposer={props.deleteItemComposer}
				completeItemComposer={props.completeItemComposer}
			/>
		);
	});

	const SortableList = SortableContainer(({ items }) => {
		return (
			<div>
				{items.map((value, index) => {
					return (
						<SortableListItem
							key={`item-${value.id}`}
							index={index}
							value={value}
						/>
					);
				})}
			</div>
		);
	});

	function handleSort({ oldIndex, newIndex, collection }, e) {
		props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
	}

	return (
		<ul>
			<SortableList
				items={props.items}
				useDragHandle={true}
				onSortEnd={handleSort}
			/>
		</ul>
	);
};

IncompleteList.propTypes = {};

export default IncompleteList;
