import React from "react";
// import style from './style.css'
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import ListItem from "../ListItem/";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import IncompleteList from '../IncompleteList/'
import CompleteList from '../CompleteList/'

const List = props => {
	function populateList() {
		var completeList = props.list[props.baseItem].completeChildren.map(id => {
			return props.list[id]
		});
		var incompleteList = props.list[props.baseItem].incompleteChildren.map(id => {
			return props.list[id]
		});
		return {completeList, incompleteList}
	}

	function buildListItem(id){
		return (
			<ListItem
			key={"child" + id}
			item={props.list[id]}
			changeBaseComposer={props.changeBaseComposer}
			deleteItemComposer={props.deleteItemComposer}
			completeItemComposer={props.completeItemComposer}
		/>
		)
	}

	function populateChildren(parentItem) {
		if (parentItem.completeChildren.length === 0 && parentItem.incompleteChildren.length === 0) {
			return;
		}
		var completeList = parentItem.completeChildren.map(child => {
			return buildListItem(child)
		});
		var incompleteList = parentItem.incompleteChildren.map(child => {
			return buildListItem(child)
		});

		return {incompleteList,completeList}
	}


	const SortableList =  SortableContainer(({ items }) => {
		return(
		<ul>
			{items.map(item => {
				return (
					<ListItem
						key={"id" + item.id}
						item={item}
						children={populateChildren(item)}
						changeBaseComposer={props.changeBaseComposer}
						deleteItemComposer={props.deleteItemComposer}
						completeItemComposer={props.completeItemComposer}
					/>
				);
			})}
		</ul>
		)});

	return (
		<div>
			<IncompleteList
			items = {dummy}
			renderChildren = {true}
			/>
			<CompleteList
			items = {dummy}
			renderChildren = {true}
			/>
		</div>
		)
};

List.propTypes = {};

export default List;


const dummy = [
{
		id: 1001,
		content: "Random seed 1",
		complete: false,
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1004]
	},
{
		id: 1002,
		content: "Random seed 2",
		complete: false,
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1003]
	},
{
		id: 1003,
		content: "Random seed 3",
		complete: false,
		parent: 1002,
		completeChildren: [],
		incompleteChildren: []
	},
{
		id: 1004,
		content: "Random seed 4",
		complete: false,
		parent: 1001,
		completeChildren: [],
		incompleteChildren: []
	}
]