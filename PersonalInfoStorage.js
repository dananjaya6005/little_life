// PersonalInfoStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const savePersonalInfo = async (name, age, monthsOfPregnancy) => {
  try {
    const personalInfo = {
      name,
      monthsOfBeingMom,
      monthsOfPregnancy,
    };
    await AsyncStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    console.log('Personal information saved successfully!');
  } catch (error) {
    console.log('Error saving personal information:', error);
  }
};

export default savePersonalInfo;
