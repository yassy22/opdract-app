import { View, Text, Image, StyleSheet, TextProps } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface TopTitleProps {
  title: string;
  subTitle: string;
}

export function TopTitle({ title, subTitle }: TopTitleProps) {
  return (
    <View style={[styles.container]}>
      <View>
        <ThemedText variant="headline" color="grayWhite">
          {title}
        </ThemedText>
        <ThemedText variant="subtitle1" color="grayWhite">
          {subTitle}
        </ThemedText>
      </View>
      <Image
        source={require("@/assets/images/pp.png")}
        style={{ width: 55, height: 55 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 33,
  },
});
