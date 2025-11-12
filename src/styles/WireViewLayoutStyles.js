import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const WireViewLayoutStyles = StyleSheet.create({
  container: {
    width: "auto",
    margin: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary200,
    marginBottom: 96,
  },

  secondaryContainer: {
    flexDirection: "column",
    paddingBottom: 24,
  },

  mainText: {
    color: "#fff",
    lineHeight: 28,
    fontSize: 18,
  },
});
