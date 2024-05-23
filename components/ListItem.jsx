// ListItem.jsx (Details Screen)
import React from "react";
import { View, Text, Image } from "react-native";

export default function ListItem({ route }) {
  const { itemId, url } = route.params;
  
  return (
    <View className="flex flex-col items-center justify-center">
      <Image className="w-80 h-80 object-contain mb-4" source={url} />
      <Text className="text-lg font-bold">Item ID: {itemId}</Text>
      {/* <Text className="text-lg font-bold">Title: {title}</Text> */}
    </View>
  );
}
