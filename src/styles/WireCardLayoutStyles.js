import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const WireCardLayoutStyles = StyleSheet.create({
  container: {
    width: "auto",
    height: 380,
    justifyContent: "space-between",
    // aspectRatio: 1 / 1,
    margin: 12,
    padding: 12,
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary100,
  },

  mainTextContainer: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    maxHeight: 360,
  },

  mainText: {
    color: "#ddd",
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.3,
  },

  seeMore: {
    color: "#fff",
    fontWeight: "600",
    marginTop: 4,
    fontSize: 14,
  },
});
