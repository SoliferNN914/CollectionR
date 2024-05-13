// ListItem.jsx (Details Screen)
import React from "react";
import { View, Text, Image } from "react-native";

export default function ListItem({ route }) {
  const { itemId, title, img } = route.params;
  
  return (
    <View className="flex flex-col items-center justify-center">
      <Image className="w-48 h-48 object-contain mb-4" source={img} />
      <Text className="text-lg font-bold">Item ID: {itemId}</Text>
      <Text className="text-lg font-bold">Title: {title}</Text>
      {/* Add more details here */}
    </View>
  );
}
