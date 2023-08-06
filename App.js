import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage


import MainStack from "./MainStack";
import { DataProvider } from "./DataProvider";

import { SymptomProvider } from "./SymptomContext";
import User from "./User";
import MyScreen from "./MyScreen";
import TrackSymptomsScreen from "./TrackSymptomsScreen";
import ViewHistoryScreen from "./ViewHistoryScreen";
import MedicalAdviceScreen from "./MedicalAdviceScreen";
import EditProfileScreen from "./EditProfileScreen";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const animationRef = useRef(null);
  const [showStartButton, setShowStartButton] = useState(false);

  useEffect(() => {
    // Start the animation when the component mounts
    startAnimation();

    // Show the start button after 2 seconds
    const timer = setTimeout(() => {
      setShowStartButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const startAnimation = () => {
    // Play the animation
    if (animationRef.current) {
      animationRef.current.fadeIn(1000);
    }
  };

  const handleStartPress = async () => {
    // Check if the user information is already stored in AsyncStorage
    const storedUserInfo = await AsyncStorage.getItem("userInfo");
    if (storedUserInfo) {
      // User info is available, navigate directly to MyScreen
      navigation.navigate("MyScreen", JSON.parse(storedUserInfo));
    } else {
      // User info is not available, navigate to the User screen
      navigation.navigate("User");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./Images/welcome.jpg")}
        style={styles.logoImage}
      />

      
        <Text style={styles.title}>
          Welcome to{"\n"}
          LITTLE-LIFE{"\n"}
          Pregnancy and early Motherhood App
        </Text>
     

      {showStartButton && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <SymptomProvider>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={HomeScreen} />
            <Stack.Screen
              name="MainStack"
              component={MainStack}
              options={{ headerShown: false }}
            />
            {/* Add the 'User' screen to the navigator */}
            <Stack.Screen
              name="User"
              component={User}
              options={{ title: "User Information" }}
            />
            {/* Add the 'MyScreen' screen to the navigator */}
            <Stack.Screen
              name="MyScreen"
              component={MyScreen}
              options={{ title: "My Screen" }}
            />
            <Stack.Screen
              name="TrackSymptomsScreen"
              component={TrackSymptomsScreen}
              options={{ title: "Track Symptoms" }}
            />
            <Stack.Screen
              name="ViewHistoryScreen"
              component={ViewHistoryScreen}
              options={{ title: "View History" }}
            />
            <Stack.Screen
              name="MedicalAdviceScreen"
              component={MedicalAdviceScreen}
              options={{ title: "Medical Advice" }}
            />
            <Stack.Screen
              name="EditProfileScreen"
              component={EditProfileScreen}
              options={{ title: "Edit Profile" }}
            />
          </Stack.Navigator>
        </SymptomProvider>
      </NavigationContainer>
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F08080",
    alignItems: "center",
    justifyContent: "center",
  },
  animationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontFamily: "Courier New",
    fontSize: 32,
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
  startButton: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  startButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
});

export default App;
