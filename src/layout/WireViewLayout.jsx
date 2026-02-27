import { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MenuInteraction, MenuChannelMeta } from "@wereform/pkgm-shared";
import { WireViewLayoutStyles as S } from "../styles/WireViewLayoutStyles";
import { WireCardLayout } from "./WireCardLayout";

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

/**
 * WireViewLayout
 *
 * Full-screen wire reader view.
 * Design aligned with WireCardLayout: BEGENONE accent, meta, content, interaction, comment input.
 *
 * Props:
 * - content, channelLogo, userName, subscribersCount, timeAgo, viewsText
 * - isItMe, onPressDeleteButton
 * - initialLiked, initialDisliked, likesCount, dislikesCount
 * - onLike, onDislike, onShare, onComment, onRepost, onMenuPress
 * - commentValue, onCommentChange, onSubmitComment
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
  initialLiked,
  initialDisliked,
  likesCount = 0,
  dislikesCount = 0,
  onLike,
  onDislike,
  onShare,
  onComment,
  onRepost,
  onMenuPress,
  commentValue: controlledValue,
  onCommentChange: controlledOnChange,
  onSubmitComment,
}) {
  const inputRef = useRef(null);
  const [internalValue, setInternalValue] = useState("");
  const isControlled = controlledOnChange != null;
  const commentValue = isControlled ? controlledValue ?? "" : internalValue;
  const onCommentChange = isControlled
    ? controlledOnChange
    : (v) => setInternalValue(v);

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

  const contentText =
    content ??
    `Curiosity is the real engine of progress. You don't need certainty — you need movement. Every experiment, every failure, every weird idea you chase sharpens your understanding of reality. 

Stop waiting to "figure it out" first. Dive in, break things, rebuild smarter. The mind grows through friction, not comfort. 

Mastery isn't perfection; it's the relentless act of returning to the edge — again and again — until the unknown feels like home. The goal isn't to win. It's to keep becoming.

#curiosity #growth #mindset #learning`;

  const finalText = contentText
    ? contentText.replace(/\r\n/g, "\n").split("\n")
    : [];

  return (
    <ScrollView style={S.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={S.secondaryContainer}>
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
          />
        </View>

        <View style={S.content}>
          {finalText.length > 0 && (
            <Text style={S.mainText}>
              {finalText.map((text, index) => (
                <Text key={index}>
                  {text.trim().replace(/\s+/g, " ")}
                  {index < finalText.length - 1 ? "\n" : ""}
                </Text>
              ))}
            </Text>
          )}
        </View>

        <View style={S.interactionSection}>
          <MenuInteraction
            variant="minimal"
            showMenuButton={true}
            canDelete={isItMe}
            onDelete={onPressDeleteButton}
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
        <WireCardLayout
          content={`Curiosity is the real engine of progress. You don't need certainty — you need movement. Every experiment, every failure, every weird idea you chase sharpens your understanding of reality. 

Stop waiting to "figure it out" first. Dive in, break things, rebuild smarter. The mind grows through friction, not comfort. 

Mastery isn't perfection; it's the relentless act of returning to the edge — again and again — until the unknown feels like home. The goal isn't to win. It's to keep becoming.

#curiosity #growth #mindset #learning`}
          channelLogo={DEFAULT_AVATAR}
          userName="John Doe"
          subscribersCount={100}
          timeAgo="1 hour ago"
          viewsText="100 views"
        />
      </View>
    </ScrollView>
  );
}
