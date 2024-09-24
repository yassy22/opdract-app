import { Card } from "../Card";
import { ThemedText } from "../ThemedText";
import { View, ViewStyle, Image, StyleSheet } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = {
  style?: ViewStyle;
  id: string;
  name: string;
};

export function PokemonCard({ style, id, name }: Props) {
  const colors = useThemeColors();
  return (
    <Card style={[style, styles.card]}>
      <View
        style={[styles.shadows, { backgroundColor: colors.GrayBackground }]}
      />
      <ThemedText variant="caption" color="tint" style={[styles.id]}>
        #{id.toString().padStart(3, "0")}
      </ThemedText>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        }}
        width={72}
        height={72}
      />
      <ThemedText variant="body3" color="grayDark">
        {name}
      </ThemedText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    alignItems: "center",
  },
  id: {
    alignSelf: "flex-end",
  },
  shadows: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 44,
    borderRadius: 4,
  },
});
