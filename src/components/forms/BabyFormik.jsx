import React from "react";

export default class BabyFormik extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      values: this.props.initialValues || {},
      touched: {},
      errors: {}
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    //add validation here
    //set `isSubmitting` to true here as well
    this.props.onSubmit(this.state.values);
  }

  render() {
    //pass state and callbacks to child as parameters
    return React.cloneElement(this.props.children, {
      state: this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit
    });
  }
}
