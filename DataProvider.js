import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SymptomContext = createContext();

export const DataProvider = ({ children }) => {
  const [historyData, setHistoryData] = useState([]);

  // Load the history data from AsyncStorage on initial render
  useEffect(() => {
    loadHistoryData();
  }, []);

  // Function to load history data from AsyncStorage
  const loadHistoryData = async () => {
    try {
      const data = await AsyncStorage.getItem('historyData');
      if (data) {
        setHistoryData(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error loading history data:', error);
    }
  };

  // Function to add a new symptom to the historyData
  const addSymptom = (symptomData) => {
    setHistoryData((prevData) => [...prevData, symptomData]);
    saveHistoryData([...historyData, symptomData]);
  };

  // Function to save the history data to AsyncStorage
  const saveHistoryData = async (data) => {
    try {
      await AsyncStorage.setItem('historyData', JSON.stringify(data));
      console.log('History data saved successfully!');
    } catch (error) {
      console.log('Error saving history data:', error);
    }
  };

  return (
    <SymptomContext.Provider value={{ historyData, addSymptom }}>
      {children}
    </SymptomContext.Provider>
  );
};
