import { type ViewProps, View, } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Colors } from "@/constants/Colors";

type Props = ViewProps & {
  color?: keyof (typeof Colors)["light"];
};

export function ThemedView({ color, style, ...rest }: Props) {
  const colors = useThemeColors();
  return (
    <View
      style={[{ backgroundColor: colors[color ?? "grayBackground"] }, style]}
      {...rest}
    />
  );
}
