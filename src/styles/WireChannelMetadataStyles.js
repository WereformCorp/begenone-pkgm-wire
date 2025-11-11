import { Platform, StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const WireChannelMetadataStyles = StyleSheet.create({
  dateViewsContainer: {
    flexDirection: "column",
    width: "auto",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  dateContainer: {
    flexDirection: "row",
    paddingBottom: 4,
    // rowGap: 20,
  },

  // dateIcon: {
  //   marginRight: 8,
  // },

  viewsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  // eyeIcon: {
  //   marginRight: 8,
  // },

  dateText: {
    color: globalStyles.colors.colorPrimary600,
    marginRight: 8,
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },

  viewsText: {
    color: globalStyles.colors.colorPrimary600,
    marginRight: 8,
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },

  channelMetaContainer: {
    width: "auto",
    flexDirection: "row",
    backgroundColor: globalStyles.colors.colorPrimary200,
    justifyContent: "space-between",
    // margin: 12,
    padding: 12,
    borderRadius: globalStyles.borders.borderPrimary100,
  },

  channelMetaContainer_ColumnOne: {
    flexDirection: "row",
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  nameSubcountContainer: {
    flexDirection: "column",
    paddingLeft: 12,
  },

  userName: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: 4,
    fontWeight: "bold",
  },

  subCountContainer: {
    flexDirection: "row",
  },

  subCount: {
    color: globalStyles.colors.colorPrimary600,
    paddingRight: 6,
    fontSize: 12,
    fontWeight: "bold",
  },

  subText: {
    color: "#fff",
    fontSize: 12,
  },

  subscribeButtonContainer: {
    backgroundColor: globalStyles.colors.colorPrimary600,
    width: 100,
    borderRadius: globalStyles.borders.borderPrimary400,
    alignItems: "center",
    justifyContent: "center",
  },

  subscribeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
