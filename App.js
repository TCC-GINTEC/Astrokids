import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 import SolarSystem from './src/pages/SolarSystem'
 import { NavigationContainer } from '@react-navigation/native';
 import InformationPlaneta from './src/pages/InformationPlaneta/'
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SistemaSolar">
      <Stack.Screen name="SolarSystem" options={{ headerShown: false }} component={SolarSystem} />
      <Stack.Screen name="InformationPlaneta"  options={{ headerShown: false }} component={InformationPlaneta} />
    </Stack.Navigator>
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
