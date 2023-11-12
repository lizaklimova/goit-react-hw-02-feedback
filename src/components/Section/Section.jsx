import { Component } from 'react';
import { Container } from './Section.styled';
export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    );
  }
}
