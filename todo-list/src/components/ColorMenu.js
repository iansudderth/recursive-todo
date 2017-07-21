import React from 'react'
import IconButton from 'material-ui/IconButton'
import Dot from 'material-ui-icons/Brightness1'

import {primaryColorParser} from '../helpers/colorParser.js'

const ColorMenu = (props)  => {
	// var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink']
	var colors = ['red','pink','deepPurple', 'indigo', 'lightBlue','cyan', 'teal', 'green','lightGreen','yellow','orange','deepOrange']
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

export default ColorMenu