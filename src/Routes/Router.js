import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteName from './RouterName'

import HomeScreen from '../Screens/Home'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackRouter = function () {
    return (
        <Stack.Navigator initialRouteName={RouteName.Home}>
            <Stack.Screen name={RouteName.Home} component={HomeScreen} />
            <Stack.Screen name={RouteName.Home} component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default function TabRouter() {
    return (
        <NavigationContainer>
            <Tab.Navigator /*screenOptions={{headerShown: false}}*/ >
                <Tab.Screen name={RouteName.Home} component={HomeScreen} />
                {/* <Tab.Screen name={RouteName.Home} component={HomeScreen} /> */}
                {/* <Tab.Screen options={{ headerShown: false }} name={RouteName.Home} component={StackRouter} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}