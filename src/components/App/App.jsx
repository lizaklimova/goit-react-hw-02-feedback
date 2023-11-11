import { Component } from 'react';
import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import NotificationMessage from '../NotificationMessage';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const { name } = e.target;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = (good, neut, bad) => {
    const total = this.countTotalFeedback(good, neut, bad);
    return total ? `${Math.ceil((good / total) * 100)}%` : total;
  };

  countTotalFeedback = (good, neut, bad) => {
    return good + neut + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave your feedback"></Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}
        />
        <Section title="Statistics">
          {!this.countTotalFeedback(good, neutral, bad) ? (
            <NotificationMessage message=" There is no feedback! 🤷🏻‍♀️" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
