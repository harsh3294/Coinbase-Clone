import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/welcome";
import { Login, CreateAccount } from "../screens/auth";
// import { Dashboard } from "../screens/home/dashboard";
export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = { headerShown: false };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Splash" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
