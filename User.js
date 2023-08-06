import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const User = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [monthsPregnant, setMonthsPregnant] = useState('');
  const [monthsBeingMom, setMonthsBeingMom] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Clear the error message when the component mounts
    setErrorMessage('');
  }, []);

  // Clear the error message when the screen gains focus (e.g., when revisiting the screen)
  useFocusEffect(() => {
    setErrorMessage('');
  });

  const handleNext = () => {
    // Validate the user input
    if (!/^[a-zA-Z]+$/.test(userName)) {
      setErrorMessage('User Name should only contain letters');
      return;
    }

    const isMonthsPregnantValid = !isNaN(Number(monthsPregnant)) && Number(monthsPregnant) >= 1 && Number(monthsPregnant) <= 9;
    const isMonthsBeingMomValid = !isNaN(Number(monthsBeingMom)) && Number(monthsBeingMom) >= 1 && Number(monthsBeingMom) <= 12;

    if (!isMonthsPregnantValid && !isMonthsBeingMomValid) {
      setErrorMessage('Please enter a valid value for Months Pregnant (1-9) or Months Being a Mom (1-12)');
      return;
    }

    if (isMonthsPregnantValid && isMonthsBeingMomValid) {
      setErrorMessage('Please choose only one option: Months Pregnant or Months Being a Mom');
      return;
    }

    // Navigate to the MyScreen component and pass the parameters
    navigation.navigate('MyScreen', {
      userName: userName,
      monthsPregnant: monthsPregnant,
      monthsBeingMom: monthsBeingMom,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Months Pregnant (1-9)"
        value={monthsPregnant}
        onChangeText={(text) => setMonthsPregnant(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Months Being a Mom (1-12)"
        value={monthsBeingMom}
        onChangeText={(text) => setMonthsBeingMom(text)}
        keyboardType="numeric"
      />

      {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '50%',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '400',
    color: '#F08080',
    textAlign: 'center',
  },
});

export default User;
