import React from 'react';
import { StyleSheet, Text ,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TestComponent from "./componentes/TestComponent";

function HomeScreen() {
  return(
    <View style={styles.container}>
      <TestComponent/>
    </View>
  );

}

const STACK = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <STACK.Navigator>
        <STACK.Screen name="Home" component={HomeScreen} />
      </STACK.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
