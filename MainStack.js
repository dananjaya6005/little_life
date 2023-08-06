import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import User from './User';
import MyScreen from './MyScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{ title: 'User Information' }}
      />
      <Stack.Screen
        name="MyScreen"
        component={MyScreen}
        options={{ title: 'My Screen' }}
        initialParams={{ userName: 'Nami' }} // Pass the userName here (you can set it dynamically)
      />
    </Stack.Navigator>
  );
};

export default MainStack;
