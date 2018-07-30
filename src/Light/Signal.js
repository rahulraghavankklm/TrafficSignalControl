import React from "react";
import Light from "./Light";

const styles = {
  signal: {
    background: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    padding: 5,
    borderRadius: 5
  }
};

class Signal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: [["red", 3000], ["yellow", 2000], ["green", 3000]],
      active: "yellow",
      counter: 0,
      isRev: false
    };
  }

  componentDidMount() {
    this.ticker = setInterval(() => {
      this.changeSignal();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  changeSignal = () => {
    const { signal, counter } = this.state;
    const newCounter = counter === signal.length - 1 ? 0 : counter + 1;
    this.setState({
      counter: newCounter,
      active: signal[newCounter][0]
    });
  };

  renderSignals = () => {
    const { active, signal } = this.state;
    return signal.map(light => {
      return <Light isOn={active === light[0]} color={light[0]} />;
    });
  };

  render() {
    return <div style={styles.signal}>{this.renderSignals()}</div>;
  }
}

export default Signal;
