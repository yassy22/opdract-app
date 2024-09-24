import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useEffect } from "react";

const queryClient = new QueryClient();
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // useEffect(() => {
  //   const hideSplashScreen = async () => {
  //     await SplashScreen.hideAsync();
  //   };

  //   hideSplashScreen();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    </QueryClientProvider>
  );
}
