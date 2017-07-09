import React, {Component} from 'react'
import style from './style.css'
import PropTypes from 'prop-types'
import _ from 'lodash';
import ListItem from '../ListItem/'

const CompleteList =  (props) => {

		return(
			<ul>
			{props.items.map((value => {
				return (
					<ListItem
					value={value}
					changeBaseComposer={props.changeBaseComposer}
					deleteItemComposer={props.deleteItemComposer}
					completeItemComposer={props.completeItemComposer}
					 />
				 )
			}))}
			</ul>
			)
}

CompleteList.propTypes = {

}

export default CompleteList