import { Pressable, Text, View } from "react-native";
import { WireCommentStripStyles as S } from "../styles/WireCommentStripStyles";

/**
 * Top-of-card strip for comment wires: "comment" tag + shortened parent ref (MFE parity).
 */
export function WireCommentParentStrip({ label, onPress }) {
  if (!label || typeof onPress !== "function") return null;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [S.strip, pressed && S.stripPressed]}
    >
      <View style={S.badge}>
        <Text style={S.badgeText}>comment</Text>
      </View>
      <Text style={S.linkText} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}
