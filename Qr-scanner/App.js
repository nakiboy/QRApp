import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screen/LoginScreen";
import MainContainer from "./Screen/MainContainer";
import QrScanner from "./Screen/src/QrScanner"

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="MainContainer" component={MainContainer}/>
        <Stack.Screen name="QrScanner" component={QrScanner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}