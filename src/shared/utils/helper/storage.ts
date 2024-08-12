import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLanguage = () => {
  return AsyncStorage.getItem('LANGUAGE');
};

export const setLanguage = async (value: string) => {
  return await AsyncStorage.setItem('LANGUAGE', value);
};

export const setToken = async (value: string) => {
  return await AsyncStorage.setItem('TOKEN', value);
};

export const getToken = () => {
  return AsyncStorage.getItem('TOKEN');
};
