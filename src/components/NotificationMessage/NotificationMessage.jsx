import { Component } from 'react';

export default class NotificationMessage extends Component {
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}
