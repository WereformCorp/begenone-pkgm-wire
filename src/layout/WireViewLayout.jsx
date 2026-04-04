import { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  MenuInteraction,
  MenuChannelMeta,
  RichHtmlBlock,
} from "@wereform/pkgm-shared";
import { WireViewLayoutStyles as S } from "../styles/WireViewLayoutStyles";
import { WireCardWithEngagement } from "../components/WireCardWithEngagement";
import { WireCommentParentStrip } from "../components/WireCommentParentStrip";

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

/**
 * WireViewLayout — full wire reader; channel meta + subscribe + comments list.
 */
export function WireViewLayout({
  content,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  isItMe,
  onPressDeleteButton,
  engagementManagedExternally = false,
  userLiked = false,
  userDisliked = false,
  initialLiked,
  initialDisliked,
  likesCount = 0,
  dislikesCount = 0,
  onLike,
  onDislike,
  onShare,
  onMenuPress,
  commentValue: controlledValue,
  onCommentChange: controlledOnChange,
  onSubmitComment,
  onChannelPress,
  isSubscribed,
  canSubscribe = true,
  subscribePending = false,
  onToggleSubscribe,
  /** Pre-shaped rows: { key, content, channelLogo, userName, subscribersCount, timeAgo, viewsText, wire, isUnderParent? } */
  commentItems = [],
  onPressCommentWire,
  wireType,
  isUnderParent = false,
  commentParentLabel,
  onPressCommentParent,
  /** Session + API for comment rows (same WireCardWithEngagement as feed). */
  commentWireToken,
  commentWireUserId,
  commentWireApiUrl,
}) {
  const inputRef = useRef(null);
  const [internalValue, setInternalValue] = useState("");
  const isControlled = controlledOnChange != null;
  const commentValue = isControlled ? controlledValue ?? "" : internalValue;
  const onCommentChange = isControlled
    ? controlledOnChange
    : v => setInternalValue(v);

  function handleEmojiPress() {
    inputRef.current?.focus();
  }

  function handlePostPress() {
    const trimmed = commentValue.trim();
    if (trimmed) {
      onSubmitComment?.();
      if (!isControlled) setInternalValue("");
    }
  }

  const contentText = content ?? "<p>No wire content yet.</p>";

  const showFeaturedCommentStrip =
    wireType === "comment" &&
    !isUnderParent &&
    Boolean(commentParentLabel) &&
    typeof onPressCommentParent === "function";

  return (
    <ScrollView style={S.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={S.secondaryContainer}>
        {showFeaturedCommentStrip ? (
          <WireCommentParentStrip
            label={commentParentLabel}
            onPress={onPressCommentParent}
          />
        ) : null}
        <View style={S.metaSection}>
          <MenuChannelMeta
            channelLogo={channelLogo || DEFAULT_AVATAR}
            userName={userName}
            subscribersCount={subscribersCount}
            timeAgo={timeAgo}
            viewsText={viewsText}
            showSubscribe={true}
            showNotificationBell={true}
            showMenuButton={false}
            containerStyles={{ marginHorizontal: 0, marginVertical: 0 }}
            cardHeight={100}
            hideCardBorder={true}
            onChannelPress={onChannelPress}
            isSubscribed={isSubscribed}
            canSubscribe={canSubscribe}
            subscribePending={subscribePending}
            onToggleSubscribe={onToggleSubscribe}
          />
        </View>

        <View style={S.content}>
          <RichHtmlBlock
            rawHtml={contentText}
            fontSize={17}
            lineHeight={26}
            contentWidthOffset={56}
            textColor="#fff"
          />
        </View>

        <View style={S.interactionSection}>
          <MenuInteraction
            variant="minimal"
            showMenuButton={true}
            canDelete={isItMe}
            onDelete={onPressDeleteButton}
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
            containerStyles={{ paddingVertical: 4 }}
          />
        </View>
      </View>
      <View style={S.commentSection}>
        <View style={S.commentInputWrapper}>
          <Pressable
            onPress={handleEmojiPress}
            style={S.commentEmojiButton}
            hitSlop={8}
          >
            <Ionicons
              name="happy-outline"
              size={22}
              color="rgba(255,255,255,0.6)"
            />
          </Pressable>
          <TextInput
            ref={inputRef}
            placeholder="Add a comment..."
            placeholderTextColor="rgba(255,255,255,0.4)"
            style={S.commentInput}
            value={commentValue}
            onChangeText={onCommentChange}
            onSubmitEditing={handlePostPress}
            returnKeyType="send"
            multiline={false}
          />
          <Pressable
            onPress={handlePostPress}
            style={({ pressed }) => [
              S.commentPostButton,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            hitSlop={8}
          >
            <Text
              style={[
                S.commentPostText,
                !commentValue.trim() && S.commentPostTextDisabled,
              ]}
            >
              Post
            </Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}
        >
          Comments
        </Text>
        {commentItems.length === 0 ? (
          <Text
            style={{
              color: "rgba(255,255,255,0.45)",
              paddingHorizontal: 16,
              paddingBottom: 24,
            }}
          >
            No comments yet.
          </Text>
        ) : (
          commentItems.map(row => (
            <WireCardWithEngagement
              key={row.key}
              wire={row.wire}
              channelLogo={row.channelLogo || DEFAULT_AVATAR}
              userName={row.userName ?? "Unknown"}
              subscribersCount={row.subscribersCount ?? 0}
              timeAgo={row.timeAgo ?? ""}
              viewsText={row.viewsText}
              onPress={() => onPressCommentWire?.(row.wire)}
              customCardStyles={{ borderRadius: 0 }}
              compact={true}
              isUnderParent={row.isUnderParent ?? true}
              token={commentWireToken}
              currentUserId={commentWireUserId}
              WIRE_API_URL={commentWireApiUrl}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}
