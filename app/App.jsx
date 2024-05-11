import React from 'react'
import HomePage from '../components/HomePage'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'expo-router'
import ListItem from '../components/ListItem'
import List from '../components/List'

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{title: 'Home Page'}}
                />
                <Stack.Screen
                name="ListItem"
                component={ListItem}
                options={{title: 'List Item'}}
                />
                <Stack.Screen
                name="List"
                component={List}
                options={{title: 'List'}}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}