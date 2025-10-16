import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your SignUpPage component
import SignUpPage from './SignUpPage'; 

// Create a stack navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen 
          name="SignUp" 
          component={SignUpPage} 
          options={{ headerShown: false }} // Hide the header for the sign-up screen
        />
        {/* You would add other screens here, e.g., LoginPage, Dashboard */}
        {/* <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;