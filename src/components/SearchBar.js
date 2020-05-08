import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
class SearchBar extends Component {
  state = {
    userInput: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      userInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(userInput);
  };
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="serch..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}
export default SearchBar;
