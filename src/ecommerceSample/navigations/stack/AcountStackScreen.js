import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../screens/Acount/AccountScreen";
import AccountDetailScreen from "../../screens/Acount/AccountDetailScreen";

const AcountStack = createNativeStackNavigator();

const AcountStackScreen = ({ navigation }) => {
  return (
    <AcountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AcountStack.Screen name="account" component={AccountScreen} />
      <AcountStack.Screen
        name="AccountDetail"
        component={AccountDetailScreen}
      />
    </AcountStack.Navigator>
  );
};

export default AcountStackScreen;
