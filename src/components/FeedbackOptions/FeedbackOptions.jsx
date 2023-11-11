import { Component } from 'react';
import { capitalizeFirstLetter } from 'components/helpers/capitalizeFirstLetter';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul>
        {options.map(el => {
          return (
            <li key={el}>
              <button type="button" name={el} onClick={onLeaveFeedback}>
                {capitalizeFirstLetter(el)}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
