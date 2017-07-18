import { red,pink,purple,deepPurple,indigo,blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange } from "material-ui/colors"


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

export const primaryColorParser = colorParserComposer(500);

export const accentColorParser = colorParserComposer('A400')

export const fadedColorParser = colorParserComposer(200)