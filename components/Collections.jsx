import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Collections() {
    const navigation = useNavigation();

    return (
        <View>
            <Text className="p-4 m-2 bg-teal-900">Add Collection</Text>
            <Text className="text-center">Your Collections</Text>
            <Text className="text-center bg-teal-900 px-4 py-4 border border-blue-700 rounded"
                onPress={() =>
                    navigation.navigate("HomePage")
                }
            >Cats
            </Text>
        </View>
    )
}