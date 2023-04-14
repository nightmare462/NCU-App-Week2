import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from './page/page1';
import Page2 from './page/page2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Page1} />
        <Stack.Screen name="Next" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;