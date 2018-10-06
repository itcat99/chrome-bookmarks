import React, { PureComponent } from "react";

class Btn extends PureComponent {
  onClick = () => {
    const { onClick } = this.props;

    onClick && onClick();
  };
  render() {
    const { children } = this.props;

    return <button onClick={this.onClick}>{children}</button>;
  }
}

export default Btn;
