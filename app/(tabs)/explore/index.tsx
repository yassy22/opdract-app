import { StyleSheet, View, SafeAreaView } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Card } from "@/components/Card";
import { FlatList } from "react-native";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { router, Stack } from "expo-router";

export default function Explore() {
  const colors = useThemeColors();
  const { data, isLoading, error } = useFetchQuery("");
  const quotes = data ?? [];
  console.log(quotes);

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Chargement des citations...</ThemedText>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Erreur lors du chargement des citations.</ThemedText>
      </ThemedView>
    );
  }

  console.log(quotes);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <Stack.Screen options={{ headerShown: false }} />

      <Card>
        <FlatList
          data={quotes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View>
              <ThemedText>{item.content}</ThemedText>
              <ThemedText>{item.author}</ThemedText>
            </View>
          )}
        />
      </Card>
      <Card>
        <FlatList
          data={quotes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View>
              <ThemedText>{item.content}</ThemedText>
              <ThemedText>{item.author}</ThemedText>
            </View>
          )}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
