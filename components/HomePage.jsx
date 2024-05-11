import React from "react";
import { View, Text } from "react-native";
import List from "./List";

export default function HomePage() {

  return (
    <View>
      <Text className="text-center">Your Collections</Text>
      <List/>
    </View>
  )
};