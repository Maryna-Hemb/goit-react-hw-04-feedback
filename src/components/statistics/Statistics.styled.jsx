import styled from 'styled-components';

const StatisticList = styled.ul`
  list-style: none;
`;
const StatisticListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export { StatisticList, StatisticListItem };
