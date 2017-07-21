import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import SaveIcon from 'material-ui-icons/Save';
import ReportIcon from 'material-ui-icons/Report'
import Autorenew from 'material-ui-icons/Autorenew'
import MDSpinner from "react-md-spinner";




const NetworkProgress = (props) => {
	let icon = ''
	switch(props.network){
		case 'progress':
			icon = <MDSpinner singleColor={props.textColor}/>
			break;
		case 'success':
			icon = <CheckIcon />
			break;
		case 'error':
			icon = <ReportIcon />
			break;
	}
		return (
			<span>
			<Button
			style={{color:props.textColor}}
			onClick={props.updateData}
			>
				{icon}
			</Button>
			</span>
			)
	}



function mapStateToProps({ network }) {
	return { network };
}


export default connect(mapStateToProps)(NetworkProgress);