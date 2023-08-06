import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import medicalAdviceData from './medicalAdviceData.json'; // Import the JSON data

const MedicalAdviceScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Function to handle search and filter the advice data
  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
    const filteredAdvice = medicalAdviceData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredAdvice);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Type your symptom here..."
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.adviceContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    padding: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  adviceContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Courier New',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F08080',
  },
  content: {
    fontFamily: 'Courier New',
    fontSize: 16,
    color: '#000',
  },
});

export default MedicalAdviceScreen;
