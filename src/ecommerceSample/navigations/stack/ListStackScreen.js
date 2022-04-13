import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../../screens/List/ListScreen";
import React from "react";

const ListStack = createNativeStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ListStack.Screen name="list" component={ListScreen} />
    </ListStack.Navigator>
  );
};

export default ListStackScreen;
