import { useState, useEffect } from "react";
import * as Font from "expo-font";


export const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"),
      AmaticSC: require("../assets/fonts/AmaticSC-Regular.ttf"),
      Lobster: require("../assets/fonts/Lobster-Regular.ttf"),
      Chewy: require("../assets/fonts/Chewy-Regular.ttf"),
     
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded;
};
