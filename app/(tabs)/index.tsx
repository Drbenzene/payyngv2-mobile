import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import AppLayout from "@/components/Layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
