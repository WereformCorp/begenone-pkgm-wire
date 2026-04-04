import { StyleSheet } from "react-native";

export const WireCommentStripStyles = StyleSheet.create({
  strip: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "rgba(255, 94, 0, 0.07)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 94, 0, 0.14)",
  },
  stripPressed: {
    backgroundColor: "rgba(255, 94, 0, 0.11)",
  },
  badge: {
    marginRight: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "600",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.38)",
  },
  linkText: {
    flex: 1,
    fontSize: 11,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.42)",
  },
});
