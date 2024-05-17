import React from "react";
import HomePage from "../components/HomePage";
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListItem from "../components/ListItem";
import List from "../components/List";
import { NativeWindStyleSheet } from "nativewind";
import Collections from "../components/Collections";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Collections"
          component={Collections}
          options={{ title: "Collections" }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="ListItem"
          component={ListItem}
          options={{ title: "List Item" }}
        />
        <Stack.Screen 
          name="List"
          component={List}
          options={{ title: "List" }} />
      </Stack.Navigator>

  );
}
