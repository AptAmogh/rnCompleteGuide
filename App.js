import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  //   function goalHandler(enteredText) {
  //     setEnteredGoal(enteredText);
  //   }

  const addGoalHandler = enteredGoal => {
    // setCourseGoals(courseGoals => [...courseGoals, enteredGoal]); // this is like calling inline function without {} and return. this will ensure values are updated
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };

  const removeGoalHandler = goalKey => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(goal => goal.key != goalKey);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* <ScrollView>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            goalKey={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
