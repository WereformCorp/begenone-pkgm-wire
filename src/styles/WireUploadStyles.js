import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/*
  WireUploadStyles

  Purpose:
  Styles for the Wire creation / upload screen, including
  user identity, text input, media previews, and upload actions.

  Design constraints:
  - Screen must scroll comfortably on small devices.
  - Text input must support long-form drafting without breaking layout.
  - Media previews are constrained to predictable sizes.
*/

export const WireUploadStyles = StyleSheet.create({
  container: {
    /*
      Root container for the Wire upload screen.

      Constraint:
      - Bottom margin reserves space for fixed navigation / actions.
    */
    flex: 1,
    backgroundColor: "#141414",
    marginBottom: 120,
  },

  profileSection: {
    /*
      Top section displaying user identity and channel access.

      Intent:
      - Visually anchors authorship before content creation.
      - Bottom border separates identity from input area.
    */
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingTop: 18,
    paddingBottom: 18,
    marginLeft: 36,
    marginRight: 36,
    borderColor: globalStyles.colors.colorPrimary450,
  },

  userImage: {
    /*
      User avatar in upload context.
      Slightly larger than feed avatars to emphasize authorship.
    */
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },

  userInfo: {
    /*
      Wrapper for username and channel settings link.
    */
    flexDirection: "column",
    justifyContent: "center",
  },

  userName: {
    /*
      Display name of the active channel/user.
    */
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  channelSettingsText: {
    /*
      Link-style text for channel settings access.
      Intentionally accent-colored to signal interactivity.
    */
    color: "#ff6600",
    marginTop: 4,
  },

  wireInputContainer: {
    /*
      Outer container for Wire text input and media.
    */
    marginRight: 24,
    marginLeft: 24,
    marginTop: 24,
  },

  wireInputTextContainer: {
    /*
      Visual wrapper around the text input area.
    */
    backgroundColor: "#202020",
    borderRadius: 12,
  },

  inputWrapper: {
    /*
      Inner wrapper for text input.

      Constraint:
      - Bottom corners remain square to visually attach media previews.
    */
    backgroundColor: "#202020",
    width: "auto",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  aboutTextArea: {
    /*
      Main Wire text input.

      Intent:
      - Supports long-form drafting.
      - Preserves whitespace for intentional line breaks.
    */
    textAlignVertical: "top",
    whiteSpace: "pre",
    height: "auto",
    minHeight: 200,
    color: "white",
    paddingTop: 16,
    lineHeight: 24,
    fontWeight: 400,
    fontSize: 18,
    paddingBottom: 36,
  },

  media: {
    /*
      Large media preview (single attachment).
    */
    width: "auto",
    height: 200,
    borderRadius: 14,
    backgroundColor: "#000",
  },

  uploadButtonContainer: {
    /*
      Container for upload-related action buttons.
    */
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  AIGenerateButton: {
    /*
      Optional AI-assisted content generation action.
    */
    paddingRight: 24,
  },

  uploadImageButton: {
    /*
      Media upload action.
      Padding increases tap target for accessibility.
    */
    paddingRight: 24,
    paddingVertical: 24,
    borderRadius: 12,
  },

  uploadButtonText: {
    /*
      Label for upload-related buttons.
    */
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },

  mediaContainer: {
    /*
      Grid container for multiple media thumbnails.

      Constraint:
      - Uses wrapping and even spacing to handle variable counts.
    */
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
    /*
      Individual media thumbnail preview.
    */
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: "#000",
  },
});
