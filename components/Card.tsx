import type { ViewProps, ViewStyle } from "react-native";
import { ThemedView } from "@/components/ThemedView";
type Props = ViewProps;

export function Card({ style, ...rest }: Props) {
  return <ThemedView {...rest} />;
}

const styles = {
  borderRadius: 8,
} satisfies ViewStyle;
