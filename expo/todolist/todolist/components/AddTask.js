import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
  },
});

export default AddTask;