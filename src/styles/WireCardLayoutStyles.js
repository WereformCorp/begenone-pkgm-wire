import { StyleSheet } from "react-native";

const COLORS = {
  bgBase: "#0E0E0E",
  bgRaised: "#171413",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.6)",
  border: "rgba(255,255,255,0.04)",
  accent: "#ff5e00",
  accentSubtle: "rgba(255,94,0,0.12)",
};

export const WireCardLayoutStyles = StyleSheet.create({
  pressable: {
    marginHorizontal: 12,
    marginVertical: 8,
  },

  container: {
    flexDirection: "column",
    backgroundColor: COLORS.bgRaised,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.accentSubtle,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    // aspectRatio: 1,
    minHeight: 280,
  },

  metaSection: {
    minHeight: 100,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.accentSubtle,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },

  mainText: {
    color: COLORS.textPrimary,
    fontSize: 15,
    lineHeight: 22,
  },

  interactionSection: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.accentSubtle,
  },
});
