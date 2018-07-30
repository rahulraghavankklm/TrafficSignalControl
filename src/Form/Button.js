import React from "react";
import PropTypes from "prop-types";

const styles = {
  field: {
    display: "flex",
    margin: 4,
    marginTop: 16
  }
};

const titleCase = str => str.slice(0, 1).toUpperCase() + str.slice(1);

class Button extends React.PureComponent {
  render() {
    const { label, name, type, onClick } = this.props;
    return (
      <div style={styles.field}>
        <button name={name} type={type} onClick={onClick}>
          {titleCase(label)}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
