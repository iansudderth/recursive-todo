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

const DragHandle = SortableHandle((props) =>{

	var activeStyle = props.complete ? {} : {cursor:'pointer'}
	var centerStyle = {display:'flex', alignItems:'center', margin:12}

	return(
		<span style={{...props.completeStyle, ...activeStyle, ...centerStyle}}>
		<Reorder />
		</span>
		)}
);

const ColorMenu = (props)  => {
	var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink']
	return (
		<div>
			{colors.map((color, index)=>{

				var breakLine = index % 4 === 3 ? <br /> : ""

				return(
				<span key={`${color}-${index}`}
				onClick={props.clickHandler(color)}>
				<IconButton
				style={{color:primaryColorParser(color)}}
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
		super(props);
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
	// listItemStyle = {backgroundColor:this.state.bgColor}
	completeGrey = grey[500];
	completeLineStyle = this.item.complete
		? { color: this.completeGrey, textDecoration: "line-through" }
		: {};
	completeStyle = this.item.complete
	? { color: this.completeGrey }
	: { color: this.textColor};


	completeDisplay() {
		var completed = this.item.completeChildren.length;
		var total = completed + this.item.incompleteChildren.length;
		var textColor = this.props.value.complete? this.completeGrey : this.props.textColor
		var displayTextStyle = this.props.value.complete
		? { color: this.completeGrey}
		: { color: this.props.textColor};
		if (total === 0) {
			return "";
		} else {
			return (
				<span
					style={displayTextStyle}
				>{`( ${completed} / ${total} complete)`}</span>
			);
		}
	}

	content() {
		var textColor = this.props.value.complete? this.completeGrey : this.props.textColor
		var contentTextStyle = this.props.value.complete
		? { color: this.completeGrey, textDecoration: "line-through" }
		: { color: this.props.textColor};
		return (
			<span style={{...contentTextStyle, wordWrap:'break-word', wordBreak:'break-all'}}>
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
		let propsColor = this.props.bgColor
		return function(){
		changeColor()
		close()
		}
	}

	render(){
		var textColor = this.props.value.complete? this.completeGrey : this.props.textColor
	return (
		<ListItem divider={true} style={{backgroundColor: this.props.itemColor, padding:12}}>
			<DragHandle
				completeStyle={{color:textColor}}
				complete={this.item.complete}
			/>
			<Checkbox
				checked={this.item.complete}
				onClick={this.props.completeItemComposer(this.item.id)}
				style={{color:textColor}}
			/>

			<ListItemText primary={this.content()}
			secondary={this.completeDisplay()}
			style={{color:textColor,padding:'0px', wordWrap : 'break-word'}}
			/>

			<IconButton
				onClick={this.props.changeBaseComposer(this.item.id)}
				style={{color:textColor}}
			>
				<FormatListBulleted />
			</IconButton>
			<IconButton
			onClick={this.openMenu}
			style={{color:textColor}}
			>
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
				<Divider />
				<div
				style={{textAlign:'center'}}
				>
				<Button
				style={{color:'white', backgroundColor:red[500], marginTop:8}}
				onClick={this.props.deleteItemComposer(this.item.id)}
				>
					<DeleteForever /> {'Delete Item'}
				</Button>
				</div>
			</Menu>
		</ListItem>
	);
	}
};

BaseListItem.propTypes = {};

export default BaseListItem;
