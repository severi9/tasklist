import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks', error);
  }
};

export const loadTasks = async () => {
  try {
    const savedTasks = await AsyncStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error('Error loading tasks', error);
    return [];
  }
}