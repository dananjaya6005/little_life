import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { SymptomContext } from './SymptomContext'; // Import the SymptomContext

const TrackSymptomsScreen = () => {
  const [symptomName, setSymptomName] = useState('');
  const [severity, setSeverity] = useState('');
  const { addSymptom } = useContext(SymptomContext); // Use the addSymptom function from SymptomContext
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddSymptom = () => {
    const symptomData = {
      id: new Date().getTime().toString(), // Use a unique identifier (here, timestamp) for the ID
      date: new Date().toISOString().split('T')[0], // Get the current date in yyyy-mm-dd format
      symptom: symptomName,
      details: severity,
    };
    addSymptom(symptomData); // Add the symptom data to the historyData in SymptomContext
    setSuccessMessage('Symptom successfully added!'); // Set the success message
    // Reset the input fields after adding the symptom
    setSymptomName('');
    setSeverity('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Symptoms</Text>
      <TextInput
        style={styles.input}
        placeholder="Symptom Name"
        value={symptomName}
        onChangeText={(text) => setSymptomName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Severity"
        value={severity}
        onChangeText={(text) => setSeverity(text)}
      />
      <Button title="Add Symptom" onPress={handleAddSymptom} />

      {/* Show the success message if it is not empty */}
      {successMessage !== '' && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{successMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Courier New',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  // New styles for the success message
  messageContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  messageText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TrackSymptomsScreen;
