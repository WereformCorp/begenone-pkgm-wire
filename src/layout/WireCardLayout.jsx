import { Text, Pressable, View } from "react-native";
import { MenuChannelMeta, MenuInteraction } from "@wereform/pkgm-shared";
import { WireCardLayoutStyles as S } from "../styles/WireCardLayoutStyles";
import { memo } from "react";

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

const LIMIT = 8;

function WireCardLayoutComponent({
  content,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  onPress,
  onMenuPress,
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
}) {
  const contentText = content ?? "";
  const finalText = contentText
    ? contentText.replace(/\r\n/g, "\n").split("\n")
    : [];

  return (
    <Pressable
      style={[
        S.pressable,
        compact && { marginHorizontal: 0, marginVertical: 6 },
      ]}
      onPress={onPress}
    >
      {({ pressed }) => (
        <View
          style={[
            S.container,
            { opacity: pressed ? 0.94 : 1 },
            compact && { minHeight: undefined },
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
            {finalText.length > 0 && (
              <Text
                numberOfLines={compact ? 4 : LIMIT}
                style={[
                  S.mainText,
                  compact && { fontSize: 14, lineHeight: 20 },
                ]}
              >
                {finalText.map((text, i) => (
                  <Text key={i}>
                    {text.trim().replace(/\s+/g, " ")}
                    {i < finalText.length - 1 ? "\n" : ""}
                  </Text>
                ))}
              </Text>
            )}
          </View>

          <View style={S.interactionSection}>
            <MenuInteraction
              variant="minimal"
              showMenuButton={true}
              onMenuPress={onMenuPress}
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
        </View>
      )}
    </Pressable>
  );
}

export const WireCardLayout = memo(WireCardLayoutComponent);
