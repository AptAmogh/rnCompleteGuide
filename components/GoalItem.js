import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.goalKey)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
