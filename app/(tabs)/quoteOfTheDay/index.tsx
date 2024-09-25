import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
} from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TopTitle } from "@/components/TopTitle";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { QuoteViewer } from "@/components/ui/QuoteViewer";
import { Stack } from "expo-router";
import { useState } from "react";
import { Card } from "@/components/Card";
import {FontPicker} from "@/components/ui/FontPicker";

export default function QuoteOfTheDay() {
  const colors = useThemeColors();
  const { data, isLoading, error } = useFetchQuery("");
  const quotes = data ?? [];
  const [selectedFont, setSelectedFont] = useState<string>("");
  console.log(selectedFont);

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

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.backBackGround }]}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <TopTitle title="Your daily reminder" subTitle="custom it and share" />
      <Card>
        <FlatList
          style={{ marginBottom: 0 }}
          contentContainerStyle={{ paddingBottom: 0 }}
          data={quotes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <QuoteViewer>
              <View style={[styles.textContainer]}>
                <ThemedText
                  variant="headline"
                  style={{ fontFamily: selectedFont }}
                >
                  {item.author}
                </ThemedText>
                <ThemedText
                  variant="body1"
                  style={[styles.textCenterd, { fontFamily: selectedFont }]}
                >
                  {item.content}
                </ThemedText>
              </View>
            </QuoteViewer>
          )}
        />
      </Card>

      <ScrollView>
        <FontPicker
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textCenterd: {
    width: "100%", // Maak de breedte responsief
    textAlign: "center",
    textDecorationStyle: "solid",
  },
});
