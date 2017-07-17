import React from "react";
// import style from "./style.css";
// import PropTypes from "prop-types";
import _ from "lodash";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import ChevronRight from "material-ui-icons/ChevronRight";
import NewItemForm from "../NewItemForm";

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
			<Typography type={"body1"} className={props.classes.crumbContainer}>
				{trail.map((item, index) => {
					return (
						<span
							key={`breadcrumb-${index}`}
							className={props.classes.crumb}
							onClick={props.changeBaseComposer(item)}
						>
							{item == "root"
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
		<div>
			<div className={classes.titleContainer}>
				<Typography type={"headline"} align={"center"}>
					{props.baseItem === "root" ? "root" : props.baseItemText}
				</Typography>
				<Typography type={"subheading"} align={"center"}>
					{props.counterText}
				</Typography>
			</div>
			<Divider />
			<BreadCrumb />
			<Divider />
			<NewItemForm newItemAction={props.newItemAction} />
		</div>
	);
};

ListHeader.propTypes = {};

export default withStyles(styleSheet)(ListHeader);
