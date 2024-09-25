import { ViewProps, ViewStyle } from "react-native";
import { ThemedView } from "@/components/ThemedView";

type Props = ViewProps;

export function QuoteViewer({ style, ...rest }: Props) {
  return <ThemedView style={[styles.borderRadius]} {...rest} />;
}

const styles = {
  borderRadius: {
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 13,
    marginVertical: 13,
    height: 430,
  } as ViewStyle,
};
