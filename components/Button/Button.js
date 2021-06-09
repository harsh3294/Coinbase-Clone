import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Button(props) {
  const { text, icon, disabled, btnStyle, onPress, btnTextStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      disabled={disabled}
      style={[style.btnContainer, btnStyle]}
    >
      {text && <Text>{text}</Text>}
      {icon && <Image source={icon} resizeMode="contain" />}
    </TouchableOpacity>
  );
}
