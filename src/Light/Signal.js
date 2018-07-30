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
      red: false,
      yellow: false,
      green: false,

      signal: ["red", "yellow", "green"],
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
      active: signal[newCounter]
    });
  };

  render() {
    const { red, yellow, green, active } = this.state;

    return (
      <div style={styles.signal}>
        <Light isOn={active === "red"} color={"red"} />
        <Light isOn={active === "yellow"} color={"yellow"} />
        <Light isOn={active === "green"} color={"green"} />
      </div>
    );
  }
}

export default Signal;
