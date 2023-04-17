import React, { Component } from "react";
import Button from "../button/button";
import Statistics from "../statistics/statistics";
import styles from "./feedback.module.css";
class Feedback extends Component {
  state = {
    bad: 0,
    good: 0,
    neutral: 0,
  };

  counterBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };
  counterGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  counterNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.buttons__container}>
          <Button buttonTitle="Good" onclickHandler={this.counterGood} />
          <Button buttonTitle="Neutral" onclickHandler={this.counterNeutral} />
          <Button buttonTitle="Bad" onclickHandler={this.counterBad} />
        </div>
       
        {this.state.good != 0 ||
        this.state.neutral != 0 ||
        this.state.bad != 0 ? (
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
          />
        ) : (
          <h3>No feedback given</h3>
        )}
      </div>
    );
  }
}
export default Feedback;
