import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [monthsPregnant, setMonthsPregnant] = useState('');
  const [monthsBeingMom, setMonthsBeingMom] = useState('');

  const handleSaveProfile = () => {
    // Validation: Ensure that the user has provided either monthsPregnant or monthsBeingMom, but not both
    if (monthsPregnant && monthsBeingMom) {
      alert('Please choose only one option: Pregnancy Month or Month of Being a Mom');
      return;
    }

    // Validation: Ensure that the user has provided a name
    if (!userName) {
      alert('Please provide your name');
      return;
    }

    // Save the profile data and navigate back to MyScreen
    const updatedProfile = {
      userName,
      monthsPregnant: monthsPregnant || '',
      monthsBeingMom: monthsBeingMom || '',
    };
    navigation.navigate('MyScreen', updatedProfile);
  };

  const handleMonthsPregnantChange = (text) => {
    // Allow only numeric input for monthsPregnant
    setMonthsPregnant(text.replace(/[^0-9]/g, ''));
  };

  const handleMonthsBeingMomChange = (text) => {
    // Allow only numeric input for monthsBeingMom
    setMonthsBeingMom(text.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Pregnancy Months"
        value={monthsPregnant}
        onChangeText={handleMonthsPregnantChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Months Being a Mom"
        value={monthsBeingMom}
        onChangeText={handleMonthsBeingMomChange}
        keyboardType="numeric"
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
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
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditProfileScreen;
