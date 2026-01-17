import { Platform, StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/*
  WireChannelMetadataStyles

  Purpose:
  Styles for rendering channel-level metadata on a Wire card,
  including author info, subscription state, date, and view count.

  Design constraints:
  - Metadata must remain compact and right-aligned to avoid
    competing with main Wire content.
  - Font sizes are platform-tuned to maintain visual parity
    between iOS and Android.
*/

export const WireChannelMetadataStyles = StyleSheet.create({
  dateViewsContainer: {
    /*
      Container for date and view count metadata.

      Intent:
      - Column layout keeps metadata vertically stacked.
      - Right alignment ensures consistent edge anchoring in feeds.
    */
    flexDirection: "column",
    width: "auto",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  dateContainer: {
    /*
      Wrapper for date icon + text.
      Row layout allows optional icon insertion without layout changes.
    */
    flexDirection: "row",
    paddingBottom: 4,
  },

  viewsContainer: {
    /*
      Wrapper for views icon + text.
      Kept separate from date for independent spacing control.
    */
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  dateText: {
    /*
      Date text styling.

      Platform note:
      - iOS text renders visually smaller at the same fontSize,
        so sizes are adjusted for parity.
    */
    color: globalStyles.colors.colorPrimary600,
    marginRight: 8,
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },

  viewsText: {
    /*
      Views count text styling.
      Intentionally matches dateText for visual consistency.
    */
    color: globalStyles.colors.colorPrimary600,
    marginRight: 8,
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },

  channelMetaContainer: {
    /*
      Primary container for channel metadata row.

      Intent:
      - Separates channel identity from Wire content.
      - Uses global tokens to remain consistent across surfaces.
    */
    width: "auto",
    flexDirection: "row",
    backgroundColor: globalStyles.colors.colorPrimary200,
    justifyContent: "space-between",
    padding: 12,
    borderRadius: globalStyles.borders.borderPrimary100,
  },

  channelMetaContainer_ColumnOne: {
    /*
      Left column containing user avatar and identity.
    */
    flexDirection: "row",
  },

  userImage: {
    /*
      Channel/user avatar.

      Constraint:
      - Fixed size ensures layout stability across feeds.
    */
    width: 40,
    height: 40,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  nameSubcountContainer: {
    /*
      Wrapper for username and subscriber count.
    */
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 12,
  },

  userName: {
    /*
      Channel display name.
      Strong visual weight to establish authorship.
    */
    color: "#fff",
    fontSize: 16,
    paddingBottom: 4,
    fontWeight: "bold",
  },

  subCountContainer: {
    /*
      Row container for subscriber count + label.
    */
    flexDirection: "row",
  },

  subCount: {
    /*
      Numeric subscriber count.
      Highlighted to draw attention without overpowering username.
    */
    color: globalStyles.colors.colorPrimary600,
    paddingRight: 6,
    fontSize: 12,
    fontWeight: "bold",
  },

  subText: {
    /*
      Subscriber label text.
    */
    color: "#fff",
    fontSize: 12,
  },

  subscribeButtonContainer: {
    /*
      Subscribe / subscribed action button.

      Constraint:
      - Fixed width ensures consistent hit area.
    */
    backgroundColor: globalStyles.colors.colorPrimary600,
    width: 100,
    borderRadius: globalStyles.borders.borderPrimary400,
    alignItems: "center",
    justifyContent: "center",
  },

  subscribeButtonText: {
    /*
      Subscribe button label.
    */
    color: "#fff",
    fontWeight: "bold",
  },
});
