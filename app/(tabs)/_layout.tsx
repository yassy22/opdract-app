import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function TabLayout() {
  const colors = useThemeColors();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.backBackGround,
          borderTopColor: colors.backBackGround,
        },
        tabBarActiveTintColor: colors.grayLight,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={colors.grayLight}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="quoteOfTheDay"
        options={{
          title: "quoteOfTheDay",

          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "square" : "square-outline"}
              color={colors.grayLight}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "explore",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "albums" : "albums-outline"}
              color={colors.grayLight}
            />
          ),
        }}
      />
    </Tabs>
  );
}
