import React from "react";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import ChevronRight from "material-ui-icons/ChevronRight";
import NewItemForm from "./NewItemForm.js";
import {primaryColorParser, fadedColorParser, textColorParser, accentColorParser, accentTextColorParser} from '../helpers/colorParser.js'

const styleSheet = createStyleSheet("Header", theme => ({
	titleContainer: {
		padding: 16
	},
	crumb: {
		alignItems: "center",
		display: "inline-flex",
		cursor: "pointer",
		"&:hover": {
			textDecoration: "underline"
		}
	},
	crumbContainer: {
		padding: 16
	}
}));

const ListHeader = props => {
	const classes = props.classes;
	const bgColor = primaryColorParser(props.items[props.baseItem].color)
	const textColor = textColorParser(props.items[props.baseItem].color)
	const accentColor = accentColorParser(props.items[props.baseItem].color)
	const accentTextColor = accentTextColorParser(props.items[props.baseItem].color)

	const BreadCrumb = () => {
		let trail = [];
		let current = props.baseItem;
		let counter = 0;
		if (current === "root") {
			trail = ["root"];
		} else {
			while (props.items[current].parent !== "root" && counter < 10) {
				trail = [current, ...trail];
				current = props.items[current].parent;
				counter++;
			}
			trail = ["root", current, ...trail];
		}
		return (
			<Typography
			type={"body1"}
			className={props.classes.crumbContainer}
			style={{color:textColor}}
			>
				{trail.map((item, index) => {
					return (
						<span
							key={`breadcrumb-${index}`}
							className={props.classes.crumb}
							onClick={props.changeBaseComposer(item)}
						>
							{item === "root"
								? "root"
								: props.items[item].content}
							{index < trail.length - 1
								? <ChevronRight />
								: ""}{" "}
						</span>
					);
				})}
			</Typography>
		);
	};

	return (
		<div
		style={{
			backgroundColor:bgColor,
			color:textColor

		}}
		>
			<div className={classes.titleContainer}>
				<Typography
				type={"headline"}
				align={"center"}
				style={{color:textColor}}
				>
					{props.baseItem === "root" ? "root" : props.baseItemText}
				</Typography>
				<Typography
				type={"subheading"}
				align={"center"}
				style={{color:textColor}}
				>
					{props.counterText}
				</Typography>
			</div>
			<Divider />
			<BreadCrumb />
			<Divider />
			<NewItemForm
			newItemAction={props.newItemAction}
			textColor={textColor}
			accentColor={accentColor}
			accentTextColor={accentTextColor}
			/>
			<Divider />
		</div>
	);
};

ListHeader.propTypes = {};

export default withStyles(styleSheet)(ListHeader);
