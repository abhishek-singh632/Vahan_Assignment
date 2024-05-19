import React, { Component } from "react";
import { connect } from "react-redux";
import { createPersonlist } from "../actions";
import { Navigate } from "react-router-dom";

class AddPersonList extends Component {
  constructor(props) {
    super(props);
    // Add your state initialization here
  }

  // Add your methods for handling form inputs and submission

  render() {
    // Add your JSX for the form here
  }
}

const mapStateToProps = (state) => ({
  // Add your mapStateToProps logic here if needed
});

export default connect(mapStateToProps, { createPersonlist })(AddPersonList);
