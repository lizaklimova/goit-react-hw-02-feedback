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

  countPositiveFeedbackPercentage = good => {
    const total = this.countTotalFeedback(this.state);
    return total ? `${Math.ceil((good / total) * 100)}%` : total;
  };

  countTotalFeedback = feedback => {
    return Object.values(feedback).reduce((acc, feed) => acc + feed, 0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
            smiles={['😁', '😐', '😒']}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback(this.state) ? (
            <NotificationMessage message=" There is no feedback! 🤷🏻‍♀️" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              feedback={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
