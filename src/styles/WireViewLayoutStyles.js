import { StyleSheet } from "react-native";

const COLORS = {
  bgBase: "#0E0E0E",
  bgRaised: "#171413",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.6)",
  border: "rgba(255,255,255,0.04)",
  accent: "#ff5e00",
  accentSubtle: "rgba(255,94,0,0.12)",
  inputBg: "#1C1C1C",
};

export const WireViewLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBase,
    marginBottom: 96,
  },

  secondaryContainer: {
    backgroundColor: COLORS.bgRaised,
    overflow: "hidden",
  },

  metaSection: {
    minHeight: 100,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },

  mainText: {
    color: COLORS.textPrimary,
    fontSize: 17,
    lineHeight: 26,
  },

  interactionSection: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  commentSection: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  commentInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },

  commentInput: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 15,
    paddingVertical: 8,
  },
});
