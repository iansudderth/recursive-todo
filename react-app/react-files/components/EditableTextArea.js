import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { defineHold, Holdable } from "react-touch";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";

const NonEditItem = props => {
  const lineStyle = props.complete ? { textDecoration: "line-through" } : {};
  const hold = defineHold({ updateEvery: 50, holdFor: 500 });
  return (
    <Holdable config={hold} onHoldComplete={props.updateHandler}>
      <div>
        <Typography
          type={"headline"}
          align={"center"}
          style={{ color: props.textColor, ...lineStyle }}
          onDoubleClick={props.updateHandler}
        >
          {props.primary}
        </Typography>
        <Typography
          type={"subheading"}
          align={"center"}
          style={{ color: props.textColor }}
          onDoubleClick={props.updateHandler}
        >
          {props.secondary}
        </Typography>
      </div>
    </Holdable>
  );
};

NonEditItem.propTypes = {
  primary: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  secondary: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.string]).isRequired,
  textColor: PropTypes.string,
  complete: PropTypes.bool,
  updateHandler: PropTypes.func.isRequired
};

NonEditItem.defaultProps = {
  textColor: "black",
  complete: false
};

class EditableTextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: ""
    };
  }

  EditItem = () => (
    <form onSubmit={this.handleBlur} style={{ width: "100%" }}>
      <TextField
        value={this.state.editText}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        fullWidth
        autoFocus
        InputProps={{
          style: {
            color: this.props.textColor
          }
        }}
      />
    </form>
  );

  handleChange = event => {
    this.setState({ editText: event.target.value });
  };

  handleBlur = event => {
    event.preventDefault();
    this.props.updateItem(this.props.id, this.state.editText);
    this.setState({ editMode: false });
  };

  TextContainer = () => {
    const EditItem = this.EditItem;
    if (this.state.editMode) {
      return <EditItem/>;
    }
    return (
      <NonEditItem
        style={{
          color: this.props.textColor,
          padding: "0px",
          wordWrap: "break-word"
        }}
        complete={this.props.complete}
        updateHandler={this.doubleClickHandler}
        textColor={this.props.textColor}
        primary={this.props.primary}
        secondary={this.props.secondary}
      />
    );
  };

  doubleClickHandler() {
    this.setState({ editMode: true, editText: this.props.primary });
  }

  render() {
    const TextContainer = this.TextContainer;
    return <TextContainer/>;
  }
}

EditableTextArea.propTypes = {
  primary: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  secondary: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.string]).isRequired,
  textColor: PropTypes.string,
  complete: PropTypes.bool,
  updateItem: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

EditableTextArea.defaultProps = {
  textColor: "black",
  complete: false
};

export default EditableTextArea;
