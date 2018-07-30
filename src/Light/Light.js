import React from "react";
import PropTypes from "prop-types";

const styles = {
  light: {
    width: 40,
    height: 40,
    borderRadius: 40,
    border: "1px solid black",
    margin: 2
  }
};

class Light extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    isOn: PropTypes.bool.isRequired
  };

  static defaultProps = {
    color: "#cecece",
    isOn: false
  };

  render() {
    const { color, isOn } = this.props;

    const lightStyle = {
      ...styles.light,
      background: isOn ? color : "#cecece"
    };

    return <div style={lightStyle} />;
  }
}

export default Light;
