import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


export default function Collections() {

    return (
        <View>
            <TouchableOpacity className="p-4 m-2 bg-teal-900">Add Collection</TouchableOpacity>
            <Text className="text-center">Your Collections</Text>
        </View>
    )
}