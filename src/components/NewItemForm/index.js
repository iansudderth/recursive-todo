import React, { Component } from "react";
import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('NewItemForm', theme => ({
	container: {
		width: '85vw',
		margin: 'auto',
		paddingBottom:'16px',
		paddingTop:'16px',
		padding:16,
		boxSizing: 'border-box'
	},
	typeItem:{
		flexGrow:1,
	}
}));



class NewItemForm extends Component {


	constructor(props) {
		super(props);

		this.state = {
			newItem: ""
		};
		this.inputUpdate = this.inputUpdate.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler(event) {
		event.preventDefault();
		this.props.newItemAction(this.state.newItem);
		this.setState({ newItem: "" });
	}

	inputUpdate(event) {
		this.setState({ newItem: event.target.value });
	}

	render() {
		const classes = this.props.classes

		return (
		<div className={classes.container}>
			<form onSubmit={this.submitHandler}>
				<Grid container gutter={24} align={'center'}>
						<Grid item className={classes.typeItem}>
							<TextField
							id="newItem"
							label="New Item"
							type="text"
							fullWidth={true}
							value={this.state.newItem}
							onChange={this.inputUpdate}
							/>
						</Grid>
						<Grid item >
							<Button
							type="submit"
							raised
							>
							Make a New Item
							</Button>
						</Grid>
				</Grid>
			</form>
		</div>
		);
	}
}

NewItemForm.propTypes = {};

export default withStyles(styleSheet)(NewItemForm);
