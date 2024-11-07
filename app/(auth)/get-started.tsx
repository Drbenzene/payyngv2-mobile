import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { router, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "expo-image";
const { width, height } = Dimensions.get("window");

export default function GetStarted() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <StatusBar style="dark" /> */}
      <ImageBackground
        source={require("../../assets/images/iphone4.png")}
        contentFit="cover"
        style={styles.image}
      >
        <View
          style={{
            width: width,
            paddingHorizontal: moderateScale(15),
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 25,
              marginBottom: moderateScale(15),
            }}
          >
            <TouchableOpacity style={styles.startBtn} onPress={() => {}}>
              <Text style={styles.startText}>Sign up as Borrower</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                //   router.push("/select-account");
              }}
              style={styles.lendBtn}
            >
              <Text style={styles.lendText}>Sign up as Lender</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/login");
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textDecorationLine: "underline",
                  textDecorationColor: Colors.bgColor,
                  fontSize: 16,
                  lineHeight: 50.32,
                  fontFamily: "outfit-medium",
                  color: Colors.bgColor,
                }}
              >
                I already have an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  startBtn: {
    backgroundColor: Colors.primaryColor,
    padding: Platform.OS === "ios" ? 17 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  startText: {
    fontSize: 17,
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  lendBtn: {
    backgroundColor: "transparent",
    padding: Platform.OS === "ios" ? 17 : 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.bgColor,
  },
  lendText: {
    fontSize: 17,
    color: Colors.bgColor,
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  image: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: width,
    resizeMode: "contain",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: moderateScale(15),
  },
});
