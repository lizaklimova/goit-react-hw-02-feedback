import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  height: 170px;
  background-color: #e5e9e567;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const TotalFeed = styled.p`
  font-size: 25px;
  text-decoration: underline;
`;
export const PositiveFeed = styled.p`
  font-size: 25px;
  color: #58ba5b;
`;
