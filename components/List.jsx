import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getCats } from "../utils/catsApi";


export default function List() {
  const navigation = useNavigation();
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCats()
      .then((response) => {
        setCats(response);
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <View className="flex flex-row flex-wrap justify-center">

      {cats.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          className="p-4 m-2 bg-teal-900 rounded"
          onPress={() =>
            navigation.navigate("ListItem", {
              catId: cat.id,
              url: cat.url,
            })
          }
        >
          <Image className="w-24 h-24 object-cover rounded" source={cat.url} />
          {/* <Text className="text-lg">{item.title}</Text> */}
        </TouchableOpacity>
      ))}
    </View>
  );
}
