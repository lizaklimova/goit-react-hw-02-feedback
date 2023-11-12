import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const OptionsItem = styled.li``;
export const OptionBtn = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;

  --bg: #e74c3c;

  --text-color: #fff;
  position: relative;
  width: 150px;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;

  &:hover {
    opacity: 1;
  }

  &:active {
    top: 4px;
  }

  /* button:hover {
    opacity: 1;
  }

  button:active {
    top: 4px;
    box-shadow: #c0392b 0px 3px 2px, #000 0px 3px 5px;
  } */
`;
