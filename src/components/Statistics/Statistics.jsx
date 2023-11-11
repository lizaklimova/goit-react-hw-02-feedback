import { Component } from 'react';
export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul>
        <li>
          <p>Good:{good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total:{total(good, neutral, bad)} </p>
        </li>
        <li>
          <p>
            Positive feedbacks:
            {positivePercentage(good, neutral, bad)}
          </p>
        </li>
      </ul>
    );
  }
}
