import { StyleSheet, View,SafeAreaView } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Card } from "@/components/Card";
import { FlatList } from "react-native";
import { useFetchQuery } from "@/hooks/useFetchQuery";

export default function HomeScreen() {
  const colors = useThemeColors();
  const { data, isLoading, error } = useFetchQuery("?limit=10");
  const quotes = data?.results ?? []; // Quotes ophalen van data
  console.log(data);

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

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.tint }]}
    >
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
