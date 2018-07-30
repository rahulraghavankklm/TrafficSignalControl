import React from "react";
import Field from "./Field";

class Settings extends React.PureComponent {
  handleOnChange = e => {
    console.warn(`${e.target.name}: ${e.target.value}`);
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
            onChange={this.handleOnChange}
          />
          <Field
            label="yellow"
            name="yellow"
            type="number"
            onChange={this.handleOnChange}
          />
          <Field
            label="green"
            name="green"
            type="number"
            onChange={this.handleOnChange}
          />
        </form>
      </div>
    );
  }
}

export default Settings;
