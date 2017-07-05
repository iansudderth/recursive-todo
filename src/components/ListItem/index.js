import React from 'react'
import style from './style.css'
import PropTypes from 'prop-types'
import _ from 'lodash';

const ListItem = (props) => {
	let children = props.children ? <ul>{props.children}</ul> : ''
		return(
		<li>
			id: {props.item.id} , content: {props.item.content}
			{children}
		</li>
		)
}

ListItem.propTypes = {

}

export default ListItem