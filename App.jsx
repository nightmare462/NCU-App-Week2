import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" 
          component={Page1} 
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#228B22' },
          }}/>
        <Stack.Screen name="Ignore" 
          component={Page2} 
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#228B22' },
          }}
        />
        <Stack.Screen name="PickUp" 
          component={Page3} 
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#228B22' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;