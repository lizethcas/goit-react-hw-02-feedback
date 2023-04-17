import React, { Component } from "react";
import styles from "./statistics.module.css";

class Statistics extends Component {
  render() {
    const { good, bad, neutral } = this.props;

    return (
      <>
        <h1>Statistics</h1>
        <div className={styles.statiscis__container}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>total : {good + bad + neutral}</p>
          <p>
            Posivive feedback:
            {((good / (good + bad + neutral)) * 100).toFixed(0)}%
          </p>
        </div>
      </>
    );
  }
}

export default Statistics;
