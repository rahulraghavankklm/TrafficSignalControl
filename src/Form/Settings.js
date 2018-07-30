import React from "react";
import Field from "./Field";
import Button from "./Button";

class Settings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      red: 1000,
      yellow: 3000,
      green: 10000
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = () => {
    console.warn("form submit");
  };

  render() {
    return (
      <div>
        <p>Settings Form</p>
        <form onSubmit={this.handleOnSubmit}>
          <Field
            label="red"
            name="red"
            type="number"
            value={this.state.red}
            onChange={this.handleOnChange}
          />
          <Field
            label="yellow"
            name="yellow"
            type="number"
            value={this.state.yellow}
            onChange={this.handleOnChange}
          />
          <Field
            label="green"
            name="green"
            type="number"
            value={this.state.green}
            onChange={this.handleOnChange}
          />
          <Button label="submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Settings;
