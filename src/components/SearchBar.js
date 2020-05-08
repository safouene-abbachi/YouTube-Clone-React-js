import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onFormSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onFormSubmit(userInput);
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="serch..."
        onChange={handleChange}
        value={userInput}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;
