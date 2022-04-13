import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-elements";

const AccountDetailScreen = ({ route, navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { email, password, lcl } = route.params;

  const UserOut = () => {
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Account</Text>

        <View style={styles.name_info}>
          <Text style={styles.name_info_text}>E-mail: {email}</Text>
          <Text style={styles.name_info_text}>Password: {password}</Text>
          <Text style={styles.name_info_text}>Current locale: {lcl}</Text>
        </View>
        <View style={styles.picker}>
          <Text style={{ marginLeft: 10 }}>Local</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Turkey" value="Türkiye" />
            <Picker.Item label="ABD" value="ABD" />
          </Picker>
        </View>
        <View style={styles.button_container}>
          <Button
            title="Log Out"
            containerStyle={{
              width: 327,
              height: 56,
            }}
            buttonStyle={{
              borderColor: "red",
              borderRadius: 12,
            }}
            type="outline"
            titleStyle={{ color: "#E82223" }}
            onPress={() => UserOut()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#FFFFFF",
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    flex: 2,
    flexDirection: "column",
    paddingTop: 92,
    color: "black",
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 30,
  },
  name: {
    flex: 2,
    color: "black",
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 36,
  },
  name_info: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 32,
  },
  name_info_text: {
    flex: 1,
    fontStyle: "normal",
    fontFamily: "SF Pro Display",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 29,
    letterSpacing: 0.04,
    color: "black",
  },

  input: {
    flex: 2,
    marginleft: 6.4,
    marginright: 6.4,
  },
  picker: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 41,
    width: 370,
    height: 62,
  },
  button_container: {
    flex: 8,
    flexDirection: "column",
    marginTop: 37,
    marginBottom: 17,
    marginHorizontal: 10,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
    marginTop: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "white",
    borderBottomColor: "red",
    textAlign: "center",
    overflow: "hidden",
    borderColor: "black",
    borderEndColor: "grey",
  },
});

export default AccountDetailScreen;
