import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SymptomContext } from './SymptomContext'; // Import the SymptomContext

const ViewHistoryScreen = () => {
  const { historyData, deleteSymptom } = useContext(SymptomContext); // Get the historyData and deleteSymptom function from SymptomContext

  // Render each history item
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.symptom}>{item.symptom}</Text>
      <Text style={styles.details}>{item.details}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteSymptom(item.id)} // Call deleteSymptom with the id of the symptom to delete
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View History</Text>
      {historyData.length === 0 ? (
        <Text style={styles.emptyMessage}>No symptoms recorded.</Text>
      ) : (
        <FlatList
          data={historyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Convert the id to a string as keyExtractor requires a string key
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    padding: 16,
  },
  title: {
    fontFamily: 'Courier New',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginBottom: 16,
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  symptom: {
    fontSize: 16,
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: '#F08080',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default ViewHistoryScreen;
