import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "./style";
export default function Button(props) {
  const { text, icon, disabled, btnStyle, onPress, btnTextStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      disabled={disabled}
      style={[style.btnContainer, btnStyle]}
    >
      {text && (
        <Text
          style={[style.btnText, btnTextStyle, { marginRight: icon ? 10 : 0 }]}
        >
          {text}
        </Text>
      )}
      {icon && (
        <Image source={icon} style={style.iconStyle} resizeMode="contain" />
      )}
    </TouchableOpacity>
  );
}
