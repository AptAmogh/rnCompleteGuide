import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //   function goalHandler(enteredText) {
  //     setEnteredGoal(enteredText);
  //   }

  const addGoalHandler = enteredGoal => {
    // setCourseGoals(courseGoals => [...courseGoals, enteredGoal]); // this is like calling inline function without {} and return. this will ensure values are updated
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalKey => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(goal => goal.key != goalKey);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
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
