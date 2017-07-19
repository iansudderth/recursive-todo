import React, {Component} from 'react'
import { ListItem, ListItemText } from "material-ui/List";
import TextField from "material-ui/TextField";


class ListItemTextArea extends Component {
	constructor(props){
		super(props)

		this.state={
			editMode:false,
			editText:''
		}

		this.TextContainer = this.TextContainer.bind(this)
		this.doubleClickHandler = this.doubleClickHandler.bind(this)
		this.EditItem = this.EditItem.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
	}

	nonEditItem(props){
				return(
			<ListItemText
			primary={props.primary}
			secondary={props.secondary}
			style={{color:props.textColor,padding:'0px', wordWrap : 'break-word'}}
			onDoubleClick={props.doubleClickHandler}
			/>
			)
	}

	EditItem(props){
		return(
			<form
			onSubmit={this.handleBlur}
			style={{width:'100%'}}
			>
			<TextField
			value={this.state.editText}
			onChange={this.handleChange}
			onBlur={this.handleBlur}
			fullWidth={true}
			autoFocus={true}
			/>
			</form>
			)
	}

	handleChange(event){
		this.setState({editText:event.target.value})
	}

	handleBlur(event){
		console.log(this.state.editText)
		console.log('blurred')
		this.setState({editMode:false})
	}

	TextContainer(props){
		var NonEditItem = this.nonEditItem
		var EditItem = this.EditItem
		if(props.editMode){
			return(
			<EditItem

			/>
			)
		} else {
			return(
				<NonEditItem
				doubleClickHandler={props.doubleClickHandler}
				primary={props.primary}
				secondary={props.secondary}
				style={{color:props.textColor,padding:'0px', wordWrap : 'break-word'}}
				/>
			)
		}
	}

	doubleClickHandler(){
		console.log("double click!!!")
		var text = this.props.rawText
		this.setState({editText:text, editMode:true})
	}

	render(){
		var TextContainer = this.TextContainer
		return(
			<TextContainer
			doubleClickHandler={this.doubleClickHandler}
			editMode={this.state.editMode}
			primary={this.props.primary}
			secondary={this.props.secondary}
			textColor={this.props.textColor}
			/>
			)}
}

export default ListItemTextArea