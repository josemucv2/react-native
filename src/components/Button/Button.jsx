import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function ButtonComponent({ title, action }) {
  return <Button title={title} onPress={action} />;
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
