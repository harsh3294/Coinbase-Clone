import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "../../../components";
import style from "../style";

function Welcome(props) {
  const { navigation } = props;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainView}>
        <Text style={style.textStyle}>Coinbase</Text>
        <Text style={style.textStyle}>Clone</Text>
        {visible && (
          <View>
            <Button text="Get Started" disabled={false} />
            <Button
              text="Sign In"
              disabled={false}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Welcome;
