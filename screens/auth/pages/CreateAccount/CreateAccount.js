import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { Button } from "../../../../components";
import style from "../style";

export default function CreateAccount(props) {
  const { navigation } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.mainView}>
        <View>
          <Text style={style.textStyle1}>Create Your Account</Text>
          <View style={style.setMargin}>
            <Text> First Name</Text>
            <TextInput
              placeholder="Enter First Name"
              style={style.textInputStyle}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View style={style.setMargin}>
            <Text> Last Name</Text>
            <TextInput
              placeholder="Enter Last Name"
              style={style.textInputStyle}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>

          <View style={style.setMargin}>
            <Text> Email</Text>
            <TextInput
              placeholder="Enter Email Address"
              style={style.textInputStyle}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={style.setMargin}>
            <Text>Password</Text>
            <TextInput
              placeholder="Enter Password"
              style={style.textInputStyle}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={style.section}>
          <Text style={style.textStyle2}>
            I certify that I am 18 years of Age or older and I agree to the
            following
            <TouchableWithoutFeedback>
              <Text style={style.linkStyle2}> User Agreement</Text>
            </TouchableWithoutFeedback>{" "}
            and
            <TouchableWithoutFeedback>
              <Text style={style.linkStyle2}> Privacy Policy</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
        <View style={style.btnView}>
          <Button text="Start" disabled={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
