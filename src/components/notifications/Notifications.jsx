import PropTypes from 'prop-types';
import { Notify } from './Notification.styled';

export const Notifications = ({ message }) => {
  return <Notify>{message}</Notify>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
