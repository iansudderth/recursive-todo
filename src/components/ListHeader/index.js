import React from 'react'
import style from './style.css'
import PropTypes from 'prop-types'
import _ from 'lodash';
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const ListHeader = (props) => {

	const RootLink = () => {
		if(props.baseItem === 'root'){
			return(
				<li
				className={style.navigation}
				>
				</li>
				)
			}
		return(
				<li
				className={style.navigation}
				onClick = {props.changeBaseComposer('root')}
				>
				<FaAngleLeft className={style.icon} /> Back to root
				</li>
			)
	}

	const ParentLink = () => {
		if(props.baseItem === 'root' || props.currentParent === 'root'){
			return(
				<li
				className={style.navigation}
				>
				</li>
				)
		}
		return(
				<li
				className={style.navigation}
				onClick = {props.changeBaseComposer(props.currentParent)}
				>
				<FaAngleLeft className={style.icon} /> Back to parent
				</li>
			)
	}

	const CompleteCount = () => {
		return(
			<div className={style.counter}>
				{props.counterText}
			</div>
			)
	}

	return(
		<div className={style.container}>
			<h1>{props.baseItem === 'root' ? 'root' : props.baseItemText}</h1>
			<nav>
				<RootLink />
				<ParentLink />
				<CompleteCount />
			</nav>
		</div>
		)
}

ListHeader.propTypes = {

}

export default ListHeader