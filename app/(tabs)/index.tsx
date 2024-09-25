import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { TopTitle } from "@/components/TopTitle";
import { Card } from "@/components/Card";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Link, useNavigation } from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();
  const colors = useThemeColors();
  const pageTitle = "Hi, lee soo hyuk";
  const subTitle = "Welcome back ";

  const navigateToOtherScreen = () => {
    (navigation as any).navigate("quoteOfTheDay");
  };

  const navigateToFavorites = () => {
    (navigation as any).navigate("explore");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.backBackGround }]}
    >
      <TopTitle title={pageTitle} subTitle={subTitle} />

      <TouchableOpacity onPress={navigateToOtherScreen}>
        <Card>
          <View style={styles.card}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ThemedText variant="headline">Discover</ThemedText>
              <TabBarIcon style={styles.rotatedBox} name="arrow-up-outline" />
            </View>
            <ThemedText variant="body1">Your daily reminder</ThemedText>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToFavorites}>
        <Card>
          <View style={(styles.card, styles.discover)}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ThemedText variant="headline">Your Favorite</ThemedText>
              <TabBarIcon style={styles.rotatedBox} name="arrow-up-outline" />
            </View>
            <ThemedText variant="body1">The citation you liked</ThemedText>
          </View>
        </Card>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 183,
    color: "red",
  },
  discover: {
    height: 350,
  },
  rotatedBox: {
    transform: [{ rotate: "45deg" }],
  },
});
