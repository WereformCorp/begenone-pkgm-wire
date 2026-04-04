import { Pressable, View } from "react-native";
import {
  MenuChannelMeta,
  MenuInteraction,
  RichHtmlBlock,
} from "@wereform/pkgm-shared";
import { WireCardLayoutStyles as S } from "../styles/WireCardLayoutStyles";
import { WireCommentParentStrip } from "../components/WireCommentParentStrip";
import { memo } from "react";

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

function WireCardLayoutComponent({
  content,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  onPress,
  onMenuPress,
  engagementManagedExternally = false,
  userLiked = false,
  userDisliked = false,
  initialLiked,
  initialDisliked,
  likesCount,
  dislikesCount,
  onLike,
  onDislike,
  onShare,
  onComment,
  onRepost,
  compact = false,
  customCardStyles,
  /** "post" | "comment" | "rewire" — comment strip when comment + parent ref */
  wireType,
  /** When true (e.g. replies under wire view), hide comment parent strip (MFE parity). */
  isUnderParent = false,
  commentParentLabel,
  onPressCommentParent,
}) {
  const contentText = content ?? "";

  const showCommentStrip =
    wireType === "comment" &&
    !isUnderParent &&
    Boolean(commentParentLabel) &&
    typeof onPressCommentParent === "function";

  return (
    <View
      style={[S.wireCardRoot, compact && S.wireCardRootCompact]}
    >
      <View
        style={[
          S.container,
          compact && { minHeight: undefined, borderRadius: 0 },
          customCardStyles,
        ]}
      >
        {showCommentStrip ? (
          <WireCommentParentStrip
            label={commentParentLabel}
            onPress={onPressCommentParent}
          />
        ) : null}

        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            S.cardPressableFill,
            { opacity: pressed ? 0.94 : 1 },
          ]}
        >
          <View
            style={[
              S.metaSection,
              compact && { minHeight: undefined, borderRadius: 0 },
            ]}
          >
            <MenuChannelMeta
              channelLogo={channelLogo || DEFAULT_AVATAR}
              userName={userName}
              subscribersCount={subscribersCount}
              timeAgo={timeAgo}
              viewsText={compact ? undefined : viewsText}
              showSubscribe={false}
              showNotificationBell={false}
              showMenuButton={false}
              containerStyles={{
                marginHorizontal: 0,
                marginVertical: 0,
                borderRadius: 0,
              }}
              cardHeight={compact ? undefined : 100}
              hideCardBorder={true}
              compact={compact}
            />
          </View>

          <View style={S.content}>
            <RichHtmlBlock
              rawHtml={contentText}
              compact={compact}
              fontSize={compact ? 14 : 15}
              lineHeight={compact ? 20 : 22}
              contentWidthOffset={compact ? 96 : 88}
              textColor="#fff"
            />
          </View>

          <View style={S.interactionSection}>
            <MenuInteraction
              variant="minimal"
              showMenuButton={true}
              onMenuPress={onMenuPress}
              showCommentAction={false}
              showRepostAction={false}
              engagementManagedExternally={engagementManagedExternally}
              userLiked={userLiked}
              userDisliked={userDisliked}
              initialLiked={initialLiked}
              initialDisliked={initialDisliked}
              likesCount={likesCount}
              dislikesCount={dislikesCount}
              onLike={onLike}
              onDislike={onDislike}
              onShare={onShare}
              onComment={onComment}
              onRepost={onRepost}
              containerStyles={{ paddingVertical: 4 }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export const WireCardLayout = memo(WireCardLayoutComponent);
