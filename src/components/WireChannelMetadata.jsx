import { Image, Pressable, Text, View } from "react-native";
import { WireChannelMetadataStyles } from "../styles/WireChannelMetadataStyles";
import { Ionicons } from "@expo/vector-icons";

/**
 * WireChannelMetadata
 *
 * Displays channel-level metadata for a Wire post.
 * Designed for compact, inline presentation under wire content.
 *
 * Props:
 * - channelLogo: string (URL)
 *   URL of the channel or user profile image.
 *   Falls back to a default placeholder image if not provided.
 *
 * - userName: string
 *   Display name of the channel or user.
 *
 * - subscribersCount: string | number
 *   Total number of subscribers for the channel.
 *
 * - timeAgo: string
 *   Human-readable timestamp (e.g. "14 Hours Ago").
 *
 * - viewsText: string | number
 *   View count displayed alongside the eye icon.
 *
 * - containerStyles: object (optional)
 *   Style overrides for the date/views container.
 *
 * Behavior:
 * - Renders channel identity (logo, name, subscriber count)
 * - Displays publish time and views with icons
 * - Uses sensible defaults when props are missing
 *
 * Usage:
 * - Intended for Wire feeds, post headers, or lightweight metadata rows
 * - Optimized for mobile layouts
 */

export function WireChannelMetadata({
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  containerStyles,
}) {
  return (
    <View style={WireChannelMetadataStyles.channelMetaContainer}>
      <View style={WireChannelMetadataStyles.channelMetaContainer_ColumnOne}>
        <Image
          source={{
            uri:
              channelLogo ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
          }}
          style={WireChannelMetadataStyles.userImage}
        />
        <View style={WireChannelMetadataStyles.nameSubcountContainer}>
          <Text style={WireChannelMetadataStyles.userName}>
            {userName || "Default Username"}
          </Text>
          <View style={WireChannelMetadataStyles.subCountContainer}>
            <Text style={WireChannelMetadataStyles.subCount}>
              {subscribersCount || "0"}
            </Text>
            <Text style={WireChannelMetadataStyles.subText}>Subscribers</Text>
          </View>
        </View>
      </View>
      <View
        style={[WireChannelMetadataStyles.dateViewsContainer, containerStyles]}
      >
        <View style={WireChannelMetadataStyles.dateContainer}>
          <Text style={WireChannelMetadataStyles.dateText}>
            {timeAgo || "14 Hours Ago"}
          </Text>
          <View style={WireChannelMetadataStyles.dateIcon}>
            <Ionicons name="calendar" size={16} color="white" />
          </View>
        </View>
        <View style={WireChannelMetadataStyles.viewsContainer}>
          <Text style={WireChannelMetadataStyles.viewsText}>
            {viewsText || "0"}
          </Text>
          <View style={WireChannelMetadataStyles.eyeIcon}>
            <Ionicons name="eye-outline" size={16} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
