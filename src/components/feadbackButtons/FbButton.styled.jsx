import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const ListItem = styled.li``;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 26px;
  border-radius: 15px;
  &:hover,
  &:focus {
    background-color: #2641b5;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;
    scale: 1.1;
  }
`;

export { List, ListItem, Button };
