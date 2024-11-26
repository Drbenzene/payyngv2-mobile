import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

// Import the screens in the auth folder
import Login from "./login";
import GetStarted from "./get-started";
import Onboarding from "./onboarding";
import Signup from "./signup";
import ForgetPassword from "./forget-password";
import VerifyEmail from "./verify-email";

const Stack = createNativeStackNavigator();

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        headerTintColor: Colors[colorScheme ?? "light"].text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="forget-password" component={ForgetPassword} />
      <Stack.Screen name="verify-email" component={VerifyEmail} />
    </Stack.Navigator>
  );
}
