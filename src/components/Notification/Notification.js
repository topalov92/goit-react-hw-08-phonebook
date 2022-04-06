import React from "react";
import PropTypes from "prop-types";
import { NotificationStyled } from "./Notification.styles";

export const Notification = ({ text }) => {
  return <NotificationStyled>{text}</NotificationStyled>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
