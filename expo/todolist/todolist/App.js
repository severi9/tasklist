import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { saveTasks, loadTasks } from './storage';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetcTasks = async () =>{
        const loadedTasks = await loadTasks()
        setTasks(loadedTasks)
    }
    fetcTasks()
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, { id: Date.now().toString(), task, done: false }];
    setTasks(newTasks);
    saveTasks(newTasks)
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks)
  };

  return (
    <View style={styles.container}>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
});