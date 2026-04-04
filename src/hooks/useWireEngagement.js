import { useCallback, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import { postWireEngagement } from "@wereform/pkgm-api";
import {
  applyOptimisticEngagementCounts,
  normalizeUserEngagement,
  wireUserEngagementFromWire,
} from "../utils/wireEngagementFromWire";

function parseCount(raw) {
  if (raw == null || raw === "") return 0;
  const n = Number(raw);
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
}

/**
 * Wires MFE–style engagement: optimistic UI, PATCH with `action` each tap, lock during request.
 */
export function useWireEngagement(wire, { token, currentUserId, WIRE_API_URL }) {
  const wireId = wire?._id ?? wire?.id;
  const engagementLockRef = useRef(false);

  const [userEngagement, setUserEngagement] = useState(() =>
    normalizeUserEngagement(wireUserEngagementFromWire(wire, currentUserId)),
  );
  const [likesCount, setLikesCount] = useState(() =>
    parseCount(wire?.likes ?? wire?.likeCount),
  );
  const [dislikesCount, setDislikesCount] = useState(() =>
    parseCount(wire?.dislikes ?? wire?.dislikeCount),
  );

  useEffect(() => {
    setUserEngagement(
      normalizeUserEngagement(wireUserEngagementFromWire(wire, currentUserId)),
    );
    setLikesCount(parseCount(wire?.likes ?? wire?.likeCount));
    setDislikesCount(parseCount(wire?.dislikes ?? wire?.dislikeCount));
  }, [
    wireId,
    wire?.likes,
    wire?.dislikes,
    wire?.likeCount,
    wire?.dislikeCount,
    currentUserId,
  ]);

  const handleEngagement = useCallback(
    async action => {
      if (!wireId || engagementLockRef.current) return;
      if (!token || !String(token).trim()) {
        Alert.alert(
          "Sign in required",
          "Log in to like or dislike wires.",
        );
        return;
      }
      if (!WIRE_API_URL) return;

      const before = userEngagement;
      const next = before === action ? null : action;
      setUserEngagement(next);
      applyOptimisticEngagementCounts(
        before,
        action,
        setLikesCount,
        setDislikesCount,
      );

      engagementLockRef.current = true;
      try {
        await postWireEngagement({
          wiresId: String(wireId),
          action,
          WIRE_API_URL,
          token,
        });
      } catch {
        /* MFE: keep optimistic UI on error */
      } finally {
        engagementLockRef.current = false;
      }
    },
    [WIRE_API_URL, token, userEngagement, wireId],
  );

  const onLikePress = useCallback(() => {
    handleEngagement("like");
  }, [handleEngagement]);

  const onDislikePress = useCallback(() => {
    handleEngagement("dislike");
  }, [handleEngagement]);

  return {
    userLiked: userEngagement === "like",
    userDisliked: userEngagement === "dislike",
    likesCount,
    dislikesCount,
    onLikePress,
    onDislikePress,
  };
}
