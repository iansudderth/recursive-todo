import { red,pink,purple,deepPurple,indigo,blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange,white,black,grey } from "material-ui/colors"

import _ from 'lodash';


// function colorParserComposer(modifier
// }


function colorParserComposer(modifier){

		var colors = { red,pink,purple,deepPurple,indigo,blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange };

	return function(colorText){


		if( colors.hasOwnProperty(colorText)){
			return colors[colorText][modifier]
		} else {
			return 'no match'
		}
	}
}

export function textColorParser(colorText, complete){
	var whiteList = ['red','pink','purple','deepPurple','indigo','blue','teal','deepOrange','brown','blueGrey'];
	var blackList = ['lightBlue','cyan','green','lightGreen','lime','yellow','amber','orange','grey'];
	if(complete){
		if(_.includes(whiteList, colorText)){
			return '#000000'
		} else {
			return '#ffffff'
		}
	} else {
			if(_.includes(whiteList, colorText)){
				return '#ffffff'
		} else {
			return '#000000'
		}
	}
}

export function accentTextColorParser(colorText){
	var whiteList = ['red','pink','purple','deepPurple', 'indigo','blue']
	var blackList = ['lightBlue', 'cyan','teal','gren','lightGreen','lime','yellow','amber','orange','deepOrange']

	if(_.includes(whiteList, colorText)){
		return '#ffffff'
	} else {
		return '#000000'
	}
}

export const primaryColorParser = colorParserComposer(500);

export const accentColorParser = colorParserComposer('A400')

export const fadedColorParser = colorParserComposer(100)