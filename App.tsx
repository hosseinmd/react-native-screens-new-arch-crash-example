/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tab1 from './src/home';
import Tab2 from './src/settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

enableScreens(true);

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="mainTab"
          options={{
            headerShown: false,
          }}
          component={Tab1}
        />
        <Stack.Screen name="product" component={Tab2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
