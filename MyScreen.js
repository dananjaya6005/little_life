import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';



const addLineBreaks = (text, n) => {
  const regex = new RegExp(`(.{1,${n}})\\b`, 'g');
  return text.replace(regex, '$1\n');
};
/*----------------------------------------------------- */
import Month1Image from './Images/1monthpreg.jpg';
import Month2Image from './Images/2monthspreg.jpeg';
import Month3Image from './Images/3monthspreg.png';
import Month4Image from './Images/4monthspreg.jpg';
import Month5Image from './Images/5monthspreg.jpg';
import Month6Image from './Images/6monthspreg.jpg';
import Month7Image from './Images/7monthspreg.jpg';
import Month8Image from './Images/8monthspreg.jpg';
import Month9Image from './Images/9monthspreg.jpeg';

import Month1Images from './Images/1monthbaby.jpg';
import Month2Images from './Images/2monthsbaby.jpg';
import Month3Images from './Images/3monthsbaby.jpg';
import Month4Images from './Images/4monthsbaby.jpg';
import Month5Images from './Images/5monthsbaby.jpg';
import Month6Images from './Images/6monthsbaby.jpg';
import Month7Images from './Images/7monthsbaby.jpg';
import Month8Images from './Images/8monthsbaby.jpg';
import Month9Images from './Images/9monthsbaby.jpg';
import Month10Images from './Images/10monthsbaby.jpg';
import Month11Images from './Images/11monthsbaby.jpeg';
import Month12Images from './Images/12monthsbaby.jpg';

/*----------------------------------------------------- */
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyScreen = ({ navigation, route }) => {
  const { userName, monthsPregnant, monthsBeingMom } = route.params;

  // Parse monthsPregnant and provide a default value of 1 if it's not a valid number
  const selectedMonth = parseInt(monthsPregnant) || 1;

  // Parse monthsBeingMom and provide a default value of 1 if it's not a valid number
  const selectedMonthMom = parseInt(monthsBeingMom) || 1;


  // Declare the monthInfo object above its usage
  const monthInfo = {
    1: {
      image: Month1Image,
      text: "Tiny embryo forms with a developing neural tube, which eventually develops into the brain and spinal cord, starts to take shape",
    },
    2: {
      image: Month2Image,
      text: "Fetus develops facial features, limbs, and internal organs",
    },
    3: {
      image: Month3Image,
      text: "Fetus can move, blink, and open its eyes; all major organs are present",
    },
    4: {
      image: Month4Image,
      text: "Growing hair and nails, practices swallowing and thumb sucking",
    },
    5: {
      image: Month5Image,
      text: " Developing senses, responsive to light and sound, and can hiccup",
    },
    6: {
      image: Month6Image,
      text: "Eyes open, gaining fat for warmth, and reacts to outside sounds",
    },
    7: {
      image: Month7Image,
      text: "Developing reflexes, and responds to touch and light changes",
    },
    8: {
      image: Month8Image,
      text: "Fingernails and toenails are fully formed, practices breathing",
    },
    9: {
      image: Month9Image,
      text: "Fully developed and ready for birth, continues to gain weight",
    },
  };
  const babyInfo = {
    1: {
      image: Month1Images,
      text: "Newborns have limited vision but can distinguish light from dark; they sleep for around 16 to 17 hours a day",
    },
    2: {
      image: Month2Images,
      text: "Their vision improves, and they may smile in response to familiar faces or sounds; some might start to coo and make gurgling sounds",
    },
    3: {
      image: Month3Images,
  
      text: " Babies become more socially active,  eye contact and trying to imitate expressions; they can lift their head and chest during tummy time",
    },
    4: {
      image: Month4Images,
      text: "Hand-eye coordination improves, and they can reach for and grasp objects; some infants may start rolling over from their front to back",
    },
    5: {
      image: Month5Images,
      text: "Babies may show interest in solid foods and begin teething; they might sit with support and explore toys with their hands",
    },
    6: {
      image: Month6Images,
      text: "Many babies can sit independently without support; they start to babble with more variety and may respond to their name",
    },
    7: {
      image: Month7Images,
      text: "Hand skills improve, and babies can pick up small objects using their thumb and forefinger (pincer grasp); they might enjoy playing interactive games like peek-a-boo",
    },
    8: {
      image: Month8Images,
      text: "Babies might start to wave bye-bye and respond to simple commands like come here some infants may crawl efficiently or even attempt to climb stairs",
    },
    9: {
      image: Month9Images,
      text: "They can understand the word no and may respond to it; babies enjoy playing with toys of different textures and shapes",
    },
    10: {
      image: Month10Images,
      text: "Babies may say a few words and understand more spoken language; some infants may take more confident steps and explore their mobility",
    },
    11: {
      image: Month11Images,
      text: "They can understand simple gestures and follow basic instructions; babies might enjoy playing interactive games like pat-a-cake and peek-a-boo",
    },
    12: {
      image: Month12Images,
      text: "Babies celebrate their first birthday marking an incredible milestone many are walking independently and exploring their environment with newfound mobility",
    },

  };


  const { image, text } =  monthsPregnant !== '' ? monthInfo[selectedMonth] : babyInfo[selectedMonthMom];
  const formattedText = addLineBreaks(text, 20); // Adjust the value of 50 based on line length

  const handleTrackSymptoms = () => {
    navigation.navigate('TrackSymptomsScreen');
  };

  const handleViewHistory = () => {
    navigation.navigate('ViewHistoryScreen');
  };

  const handleMedicalAdvice = () => {
    navigation.navigate('MedicalAdviceScreen');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfileScreen', {
      userName,
      monthsPregnant,
      monthsBeingMom,
    });
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.menuBar}>
          <TouchableOpacity style={styles.menuButton} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Hello {userName}!</Text>
          <Image source={image} style={styles.monthsImage} />
          <Text style={styles.userName}>{formattedText}</Text>
        </View>

        {monthsBeingMom !== '' && (
          <Text style={styles.subtitle}>
            Months Being a Mom: {monthsBeingMom} 
          </Text>
        )}

        {monthsPregnant !== '' && (
          <Text style={styles.subtitle}>
            Months Being Pregnant: {monthsPregnant} 
          </Text>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleTrackSymptoms}>
            <Text style={styles.buttonText}>Track Symptoms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleViewHistory}>
            <Text style={styles.buttonText}>View History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMedicalAdvice}>
            <Text style={styles.buttonText}>Medical Advice</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: windowHeight * 0.03,
    marginRight: windowWidth * 0.02,
    width: '100%',
  },
  menuButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: windowHeight * 0.01,
  },
  title: {
    fontFamily: 'Courier New',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginBottom: windowHeight * 0.04,
  },
  subtitle: {
    fontFamily: 'Courier New',
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginTop: windowHeight * 0.02,
    maxWidth: '70%',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  userName: {
    fontFamily: 'Courier New',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: windowHeight * 0.00,
  },
  monthsImage: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.2,
    borderRadius: windowWidth * 0.08,
    marginBottom: windowHeight * 0.03,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'30%',
    
  },
  button: {
    backgroundColor: '#ffffff',
    paddingHorizontal: windowWidth * 0.02,
    paddingVertical: windowHeight * 0.04,
    borderRadius: windowWidth * 0.06,
    marginHorizontal: windowWidth * 0.01,
  },
  buttonText: {
    fontFamily: 'Courier New',
    fontSize: 16,
    color: '#F08080',
  },
});

export default MyScreen;