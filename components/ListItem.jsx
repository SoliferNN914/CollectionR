// ListItem.jsx (Details Screen)
import React from "react";
import { View, Text } from "react-native";

export default function ListItem({ route }) {
  const { itemId, title } = route.params;
  
  return (
    <View className="flex flex-row">
      <Text className="text-lg">Item ID: {itemId}</Text>
      <Text className="text-lg">Title: {title}</Text>
      {/* Add more details here */}
    </View>
  );
}
