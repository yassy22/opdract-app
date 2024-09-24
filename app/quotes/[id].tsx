import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Pokemon() {
  const params = useLocalSearchParams();
  return (
    <ThemedView>
      <ThemedText> {params.id}</ThemedText>
    </ThemedView>
  );
}
