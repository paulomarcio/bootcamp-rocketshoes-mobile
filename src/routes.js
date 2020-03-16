import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './services/navigation';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerBackTitle: false,
          header: props => <Header {...props} />,
          cardStyle: {
            backgroundColor: '#191920',
          },
        }}>
        <Stack.Screen name="home" options={{title: ''}} component={Home} />
        <Stack.Screen name="cart" options={{title: ''}} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
