import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => toggleTask(item.id)}>
          <Text style={[styles.task, item.done && styles.done]}>{item.task}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  done: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default TaskList