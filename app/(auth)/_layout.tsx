import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

// Import the screens in the auth folder
import Login from "./login";
import GetStarted from "./get-started";
// import RegisterScreen from "@/auth/register";
// import ForgotPasswordScreen from "@/auth/forgot-password";

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
      <Stack.Screen name="GetStarted" component={GetStarted} />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
