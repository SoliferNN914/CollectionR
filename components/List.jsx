import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Data = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  // Add more items as needed
];

export default function List({ navigation }) {

//   const handlePress = (itemId, title) => {
//     navigation.navigate("ListItem", { itemId, title });
//   };

  return (
    <View className="flex-1 items-center justify-center">
      {Data.map(item => (
        <TouchableOpacity key={item.id} className="p-4 m-2 bg-gray-200 rounded" onPress={() => navigation.navigate('ListItem', { itemId: item.id, title: item.title })}>
          <Text className="text-lg">{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
