import React from "react";
import PropTypes from "prop-types";

const styles = {
  field: {
    display: "flex",
    marginBottom: 4
  },
  label: {
    width: "30%",
    textAlign: "left"
  },
  input: {
    width: "50%"
  }
};

const titleCase = str => str.slice(0, 1).toUpperCase() + str.slice(1);

class Field extends React.PureComponent {
  render() {
    const { label, name, type, onChange } = this.props;
    return (
      <div style={styles.field}>
        <label htmlFor={label} style={styles.label}>
          {titleCase(label)}:
        </label>
        <input
          style={styles.input}
          id={label}
          name={name}
          type={type}
          onChange={onChange}
        />
      </div>
    );
  }
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Field;
