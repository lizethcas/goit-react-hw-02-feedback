import React, { Component } from "react";
import styles from "./button.module.css";
class Button extends Component {
  render() {
    const { buttonTitle, onclickHandler } = this.props;
    return (
      <>
        <button className={styles.button} onClick={onclickHandler}>
          {buttonTitle}
        </button>
      </>
    );
  }
}

export default Button;
