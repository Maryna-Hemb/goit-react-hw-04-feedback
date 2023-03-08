import PropTypes from 'prop-types';
import { List, ListItem, Button } from './FbButton.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <ListItem key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
