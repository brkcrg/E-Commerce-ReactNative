import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

const AccountScreen = ({ navigation }) => {
  const [selectedLocale, setSelectedLocale] = useState("");
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState("");
  const [buttonShow, setButtonShow] = useState(true);

  const SignUser = () => {
    navigation.navigate("AccountDetail", {
      email: userEmail,
      password: userPassword,
      lcl: selectedLocale,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Account</Text>
        <View>
          <Input
            style={styles.input}
            placeholder="E-mail"
            onChangeText={(e) => {
              setUserEmail(e);
              if (e.length === 0) {
                setButtonShow(true);
              } else {
                setButtonShow(false);
              }
            }}
          />
          <Input
            style={styles.input}
            placeholder="Pasword"
            secureTextEntry={true}
            onChangeText={(e) => {
              setUserPassword(e);
              if (e.length === 0) {
                setButtonShow(true);
              } else {
                setButtonShow(false);
              }
            }}
          />
        </View>
        <View style={styles.picker}>
          <Text style={{ marginLeft: 10 }}>Local</Text>
          <Picker
            selectedValue={selectedLocale}
            onValueChange={(itemValue) => setSelectedLocale(itemValue)}
          >
            <Picker.Item label="Turkey" value="Türkiye" />
            <Picker.Item label="ABD" value="ABD" />
          </Picker>
        </View>
        <View style={styles.button_container}>
          <Button
            title="Sign Up"
            disabled={buttonShow}
            titleStyle={{
              fontWeight: "700",
              fontSize: 14,
              fontFamily: "Nunito Sans",
            }}
            buttonStyle={{
              backgroundColor: "#E82223",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 12,
            }}
            containerStyle={{
              width: 327,
              height: 60,
            }}
            onPress={() => SignUser()}
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
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    flex: 2,
    flexDirection: "column",
    paddingTop: 20,
    color: "black",
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 30,
  },
  input: {
    flex: 2,
    marginLeft: 6.4,
    marginRight: 6.4,
  },
  picker: {
    flex: 1,
    flexDirection: "column",

    width: 370,
    height: 62,
  },
  button_container: {
    flex: 5,
    marginTop: 37,
    paddingHorizontal: 24,
  },
  button: {
    width: 365,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#E82223",
    textAlign: "center",
  },
});

export default AccountScreen;
