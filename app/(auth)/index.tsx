import { StyleSheet, View } from "react-native";
import React from "react";
import { vs, s, ms } from "react-native-size-matters";
import { Text } from "@/components/Themed";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

const Auth = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: ms(20),
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: vs(20),
          }}
        >
          indedddddx
        </Text>
      </View>
    </ScrollView>
  );
};

export default Auth;

const styles = StyleSheet.create({});
