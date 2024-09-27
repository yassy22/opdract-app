import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useLoadFonts } from "@/hooks/useLoadFonts";
import { useThemeColors } from "@/hooks/useThemeColors";

interface FontPickerProps {
  selectedFont: string;
  setSelectedFont: (font: string) => void;
}

export function FontPicker({ selectedFont, setSelectedFont }: FontPickerProps) {
  const colors = useThemeColors();

  const [modalVisible, setModalVisible] = useState(false);
  const fonts = ["Pacifico", "AmaticSC", "Lobster", "Chewy"];

  const fontsLoaded = useLoadFonts();
  

  return (
    <View
      style={[
        styles.pickerContainer,
        { backgroundColor: colors.tint },
      ]}
    >
      <TouchableOpacity
        onPress={() => setModalVisible(true)} // De modal wordt geopend bij klikken op de knop
        style={styles.button}
      >
        <Text style={styles.buttonText}>Select Font</Text>
      </TouchableOpacity>

      {Platform.OS === "ios" ? (
        <Modal transparent={true} visible={modalVisible} animationType="slide">
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Choose a Font</Text>
              <Picker
                selectedValue={selectedFont}
                onValueChange={(itemValue) => {
                  setSelectedFont(itemValue);
                  setModalVisible(false); // Sluit de modal na selectie
                }}
                style={styles.picker}
                itemStyle={styles.pickerItem}
              >
                {fonts.map((font) => (
                  <Picker.Item key={font} label={font} value={font} />
                ))}
              </Picker>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        <Picker
          selectedValue={selectedFont}
          onValueChange={(itemValue) => setSelectedFont(itemValue)}
          style={styles.picker}
        >
          {fonts.map((font) => (
            <Picker.Item key={font} label={font} value={font} />
          ))}
        </Picker>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 10,

    borderRadius: 10,
    elevation: 2,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  picker: {
    height: 150,
    width: "100%",
  },
  pickerItem: {
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: "#E94E77",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    alignSelf: "center",
    width: "50%",
  },
});
