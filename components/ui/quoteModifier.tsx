import { ViewProps, ViewStyle, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Card } from "@/components/Card";

type Props = ViewProps;

export function QuoteModifier() {
  return (
    <Card>
      <View style={[styles.icons]}>
        <TabBarIcon name="map" />
        <TabBarIcon name="woman-sharp" />
      </View>
    </Card>
  );
}


const styles = {
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  } as ViewStyle,
};