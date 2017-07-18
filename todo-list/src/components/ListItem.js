import React, {Component} from "react";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import { SortableHandle } from "react-sortable-hoc";
import { ListItem, ListItemText } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import Reorder from "material-ui-icons/Reorder";
import Dot from 'material-ui-icons/Brightness1'
import DeleteForever from "material-ui-icons/DeleteForever";
import Settings from 'material-ui-icons/Settings'
import FormatListBulleted  from "material-ui-icons/FormatListBulleted";
import { red,pink,purple,deepPurple,indigo,blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, grey } from "material-ui/colors"
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {primaryColorParser, fadedColorParser} from '../helpers/colorParser.js'

const DragHandle = SortableHandle((props) =>
		<span style={props.completeStyle}>
		<Reorder />
		</span>
);

const ColorMenu = (props)  => {
	var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink']
	return (
		<div>
			{colors.map((color, index)=>{

				var breakLine = index % 4 === 3 ? <br /> : ""

				return(
				<span key={`${color}-${index}`}>
				<IconButton
				style={{color:primaryColorParser(color)}}
				onClick={props.clickHandler(color)}
				>
					<Dot />
				</IconButton>
				{breakLine}
				</span>
				)
			})}
		</div>
		)
}


class BaseListItem extends Component {

	constructor(props){
		super(props)

		this.state = {
			open:false,
			anchorEl: undefined
		}

		this.completeDisplay = this.completeDisplay.bind(this);
		this.content = this.content.bind(this);
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.colorItemClickHandler = this.colorItemClickHandler.bind(this);
	}
	 item = this.props.value;

	incompleteListStyle = { backgroundColor: primaryColorParser(this.item.color) };
	completeListStyle = { backgroundColor: fadedColorParser(this.item.color) };
	// listItemStyle = this.item.complete
	// 	? this.completeListStyle
	// 	: this.incompleteListStyle;
	listItemStyle = {backgroundColor:this.props.bgColor}
	completeGrey = grey[500];
	completeLineStyle = this.item.complete
		? { color: this.completeGrey, textDecoration: "line-through" }
		: {};
	completeStyle = this.item.complete ? { color: this.completeGrey } : {};


	completeDisplay() {
		var completed = this.item.completeChildren.length;
		var total = completed + this.item.incompleteChildren.length;
		if (total === 0) {
			return "";
		} else {
			return (
				<span
					style={this.completeStyle}
				>{`( ${completed} / ${total} complete)`}</span>
			);
		}
	}

	content() {
		return (
			<span style={this.completeLineStyle}>
				{this.item.content}
			</span>
		);
	}

	openMenu(event){
		this.setState({open:true, anchorEl: event.currentTarget})
	}

	closeMenu(){
		this.setState({open:false})
	}

	colorItemClickHandler(colorName){
		var close = this.closeMenu
		let changeColor = this.props.changeColorComposer(this.item.id, colorName)
		return function(){
		console.log(colorName)
		changeColor()
		}
	}

	render(){
	return (
		<ListItem divider={true} style={this.listItemStyle}>
			<DragHandle
				completeStyle={this.completeStyle}
			/>
			<Checkbox
				checked={this.item.complete}
				onClick={this.props.completeItemComposer(this.item.id)}
				style={this.completeStyle}
			/>

			<ListItemText primary={this.content()} secondary={this.completeDisplay()} />

			<IconButton
				onClick={this.props.changeBaseComposer(this.item.id)}
				style={this.completeStyle}
			>
				<FormatListBulleted />
			</IconButton>
			<IconButton onClick={this.openMenu}>
				<Settings />
			</IconButton>
			<Menu
			id={`${this.item.id}-menu`}
			open={this.state.open}
			onRequestClose={this.closeMenu}
			anchorEl={this.state.anchorEl}
			>
				<Typography
				type={"subheading"}
				align={'center'}
				style={{outline:'none', paddingLeft:16}}
				>Change Color</Typography>
				<Divider />
				<ColorMenu
				clickHandler={this.colorItemClickHandler}
				/>
			</Menu>
		</ListItem>
	);
	}
};

BaseListItem.propTypes = {};

export default BaseListItem;


			// <IconButton
			// 	onClick={props.deleteItemComposer(item.id)}
			// 	style={completeStyle}
			// >
			// 	<DeleteForever />
			// </IconButton>