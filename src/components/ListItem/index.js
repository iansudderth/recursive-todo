import React from 'react'
import style from './style.css'
import PropTypes from 'prop-types'
import _ from 'lodash';
import FaCheckSquare from 'react-icons/lib/fa/check-square'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'

const ListItem = (props) => {
	let children = props.children ? <ul>{props.children}</ul> : ''
		return(
			<li>
				<span
				onClick={props.changeBaseComposer(props.item.id)}
				className={style.item}
				>
				id: {props.item.id} , content: {props.item.content} ({props.item.children.length})
				</span>
				<FaCheckSquare
				 className={`${style.icon} ${style.complete}`}
				 onClick={props.completeItemComposer(props.item.id)}
				 />
				<FaTimesCircle
				className={`${style.icon} ${style.delete}`}
				onClick={props.deleteItemComposer(props.item.id)}
				/>
				{children}
			</li>
		)
}

ListItem.propTypes = {

}

export default ListItem