import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "../../../../components";
import style from "../style";
export default function Login(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.mainView}>
        <View>
          <Text style={style.textStyle}>Sign in to Coinbase</Text>
          <View style={style.setMargin}>
            <Text style={style.textStyle1}>Email</Text>
            <TextInput
              style={style.textInputStyle}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email id"
            />
          </View>
          <View style={style.setMargin}>
            <Text style={style.textStyle1}>Password</Text>
            <TextInput
              style={style.textInputStyle}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your password"
            />
          </View>

          <View style={style.flexRowView}>
            <TouchableOpacity style={style.linkStyle}>
              <Text>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.linkStyle}>
              <Text>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.btnView}>
          <Button
            text="Sign In"
            disabled={false}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
