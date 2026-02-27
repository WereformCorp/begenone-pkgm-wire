import { StyleSheet } from "react-native";

const COLORS = {
  bgBase: "#080808",
  bgInput: "#1C1C1C",
  bgPicker: "#161616",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.55)",
  accent: "#ff5e00",
  border: "rgba(255,255,255,0.06)",
};

export const WireUploadStyles = StyleSheet.create({
  /* ── root ── */
  scroll: {
    flex: 1,
    backgroundColor: COLORS.bgBase,
  },

  container: {
    paddingBottom: 120,
  },

  /* ── profile header ── */
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  avatarWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginRight: 12,
  },

  avatarImage: {
    width: "100%",
    height: "100%",
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },

  /* ── form area ── */
  formArea: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  /* heading row */
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  heading: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0.2,
  },

  headingAccent: {
    color: COLORS.accent,
  },

  videoLink: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  videoLinkText: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: "600",
  },

  videoLinkAccent: {
    color: COLORS.accent,
  },

  /* ── section label ── */
  sectionLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 10,
    marginTop: 4,
  },

  /* ── wire composer ── */
  composerCard: {
    backgroundColor: COLORS.bgInput,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
  },

  composerInput: {
    color: COLORS.textPrimary,
    minHeight: 180,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: "top",
  },

  /* ── toolbar (AI + media) ── */
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingBottom: 10,
    gap: 4,
  },

  toolbarBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  /* ── media grid ── */
  mediaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 14,
  },

  mediaThumb: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#000",
    overflow: "hidden",
  },

  mediaThumbImage: {
    width: "100%",
    height: "100%",
  },

  /* ── dropdowns ── */
  dropdownWrapper: {
    marginBottom: 14,
  },

  dropdownOverride: {
    marginLeft: 0,
    marginRight: 0,
  },

  /* ── action buttons ── */
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 32,
  },

  postButton: {
    flex: 1,
    backgroundColor: COLORS.accent,
    borderRadius: 10,
  },

  scheduleButton: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 10,
  },
});
