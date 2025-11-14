import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const WireUploadStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    marginBottom: 120,
    // paddingHorizontal: 16,
    // paddingTop: 20,
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 36,

    borderBottomWidth: 1,
    paddingTop: 18,
    paddingBottom: 18,
    marginLeft: 36,
    marginRight: 36,
    borderColor: globalStyles.colors.colorPrimary450,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },
  userInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  channelSettingsText: {
    color: "#ff6600",
    marginTop: 4,
  },

  // /////////////////

  wireInputContainer: {
    marginRight: 24,
    marginLeft: 24,
    marginTop: 24,
  },

  wireInputTextContainer: {
    backgroundColor: "#202020",
    borderRadius: 12,
  },

  inputWrapper: {
    backgroundColor: "#202020",
    width: "auto",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  aboutTextArea: {
    textAlignVertical: "top",
    // whiteSpace: "pre-line",
    whiteSpace: "pre",

    height: "auto",
    minHeight: 200,
    color: "white",
    paddingTop: 16,
    marginTop: 0,
    lineHeight: 24,
    fontWeight: 400,
    fontSize: 18,
    paddingBottom: 36,
  },

  media: {
    width: "auto",
    height: 200,
    borderRadius: 14,
    // marginBottom: 16,
    backgroundColor: "#000",
  },

  uploadButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  AIGenerateButton: {
    paddingRight: 24,
  },

  uploadImageButton: {
    paddingRight: 24,
    // backgroundColor: "#252525",
    paddingVertical: 24,
    borderRadius: 12,
    // marginBottom: 20,
    // marginTop: 20,
  },

  uploadButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },

  mediaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    width: "auto",
    marginBottom: 16,
    paddingLeft: 6,
    paddingRight: 6,
    justifyContent: "space-evenly",
  },

  mediaThumb: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: "#000",
  },
});
