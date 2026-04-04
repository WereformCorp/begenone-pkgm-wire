import { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { WireCardLayout } from "../layout/WireCardLayout";
import { parentRefTargetFromWire } from "../utils/wireParentRefs";
import { useWireEngagement } from "../hooks/useWireEngagement";

/**
 * Single wire surface for feed, channel, wire-view replies, and video comment sheet:
 * layout + like/dislike (PATCH route-engagement) + optional comment parent strip.
 */
export function WireCardWithEngagement({
  wire,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  onPress,
  compact = false,
  isUnderParent = false,
  customCardStyles,
  token,
  currentUserId,
  WIRE_API_URL,
}) {
  const navigation = useNavigation();
  const eg = useWireEngagement(wire, { token, currentUserId, WIRE_API_URL });

  const parentRef = useMemo(
    () =>
      wire?.type === "comment" && !isUnderParent
        ? parentRefTargetFromWire(wire)
        : null,
    [wire, isUnderParent],
  );

  const onPressCommentParent = useCallback(() => {
    if (!parentRef) return;
    if (parentRef.kind === "video") {
      navigation.navigate("VideoView", { videoId: parentRef.id });
    } else {
      navigation.navigate("WireView", { wireId: parentRef.id });
    }
  }, [parentRef, navigation]);

  return (
    <WireCardLayout
      content={wire?.wireText ?? wire?.content ?? ""}
      channelLogo={channelLogo}
      userName={userName}
      subscribersCount={subscribersCount}
      timeAgo={timeAgo}
      viewsText={viewsText}
      onPress={onPress}
      compact={compact}
      customCardStyles={customCardStyles}
      wireType={wire?.type}
      isUnderParent={isUnderParent}
      commentParentLabel={parentRef?.label}
      onPressCommentParent={parentRef ? onPressCommentParent : undefined}
      engagementManagedExternally
      userLiked={eg.userLiked}
      userDisliked={eg.userDisliked}
      likesCount={eg.likesCount}
      dislikesCount={eg.dislikesCount}
      onLike={eg.onLikePress}
      onDislike={eg.onDislikePress}
    />
  );
}
