import { View, Text } from "react-native";

import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ListStackScreen from "../navigations/stack/ListStackScreen";
import AcountStackScreen from "../navigations/stack/AcountStackScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="List"
          component={ListStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={color}
                size={26}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AcountStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="AccountClass"
          component={AcountClassStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;
