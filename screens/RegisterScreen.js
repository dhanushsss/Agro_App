import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { normal } from "../helpers/normal";
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [proname, setNormal] = useState({ value: "", error: "" });

  return (
    <Screen style={styles.back}>
      <AppText>Farmer's Product</AppText>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Product Name"
        returnKeyType="next"
        value={normal.value}
        onChangeText={(text) => setNormal({ value: text, error: "" })}
        error={!!normal.error}
        errorText={normal.error}
      />
      <TextInput
        label="Area Name"
        returnKeyType="next"
        value={normal.value}
        onChangeText={(text) => setNormal({ value: text, error: "" })}
        error={!!normal.error}
        errorText={normal.error}
      />
      <TextInput
        label="Cost"
        returnKeyType="next"
        value={normal.value}
        onChangeText={(text) => setNormal({ value: text, error: "" })}
        error={!!normal.error}
        errorText={normal.error}
      />
      <TextInput
        label="Quantity"
        returnKeyType="next"
        value={normal.value}
        onChangeText={(text) => setNormal({ value: text, error: "" })}
        error={!!normal.error}
        errorText={normal.error}
      />
      <TouchableOpacity>
        <Button mode="contained" style={{ marginTop: 24 }}>
          <AppText style={{ color: "#fff" }}>Register</AppText>
        </Button>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    padding: 20,
    fontFamily: "Josefin-Sans",
  },

  row: {
    flexDirection: "row",
    marginTop: 2,
  },
  link: {
    fontWeight: "bold",
    color: "blue",
  },
});
