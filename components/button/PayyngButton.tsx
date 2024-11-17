import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import colors from "../../constants/Colors";

interface Props {
  buttonText: string;
  buttonColor: any;
  buttonTextColor: any;
  onPress: any;
  disabled?: boolean;
  marginTop?: any;
  borderWidth?: any;
  borderColor?: any;
}

const PayyngButton = ({
  onPress,
  buttonText,
  buttonColor,
  buttonTextColor,
  disabled,
  marginTop,
  borderWidth,
  borderColor,
}: Props) => {
  const [showIndicator, setShowIndicator] = useState(false);

  const handlePress = () => {
    setShowIndicator(true);
    onPress();
  };

  return (
    <View>
      <TouchableOpacity
        disabled={disabled || showIndicator}
        onPress={onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          borderRadius: 10,
          backgroundColor: buttonColor,
          paddingVertical: Platform.OS === "ios" ? 13 : 12,
          paddingHorizontal: 14,
          borderWidth: borderWidth,
          borderColor: borderColor,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "payyng-regular",
            textAlign: "center",
            color: buttonTextColor,
          }}
        >
          {buttonText}
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={27} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default PayyngButton;
