import React, { Component } from "react";
import "./App.css";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {};

  static propTypes = {};

  getOptionsValues = () => Object.keys(this.state);

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    //общеe количествo собранных отзывов из всех категорий
    let totalFeedback = Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positiveFeedbackPercentage = Math.round(
      good / (this.countTotalFeedback() * 0.01)
    );
    return positiveFeedbackPercentage || 0; // || возвращает выражение справа, если левая часть ложная
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1> Our visitors feedback</h1>
        <Section title="Please, leave your feedback! This is important for us!">
          <FeedbackOptions
            options={this.getOptionsValues()}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="STATISTICS">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
