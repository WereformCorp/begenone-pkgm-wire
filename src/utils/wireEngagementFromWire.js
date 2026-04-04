/**
 * Mirrors Wires MFE `wireToPostCardProps.js` engagement helpers.
 */

function userIdInReactionList(list, userId) {
  if (userId == null || String(userId).trim() === "" || !Array.isArray(list)) {
    return false;
  }
  const uid = String(userId);
  return list.some(entry => {
    if (entry == null) return false;
    if (typeof entry === "object") {
      const id = entry._id ?? entry.id ?? entry.userId;
      return id != null && String(id) === uid;
    }
    return String(entry) === uid;
  });
}

/**
 * Current user's engagement from wire document (dislike wins over like).
 */
export function wireUserEngagementFromWire(wire, currentUserId) {
  if (!wire || typeof wire !== "object") return null;

  const me =
    currentUserId != null && String(currentUserId).trim() !== ""
      ? String(currentUserId).trim()
      : null;
  if (me) {
    if (userIdInReactionList(wire.dislikedBy, me)) return "dislike";
    if (userIdInReactionList(wire.likedBy, me)) return "like";
  }

  if (wire.userDisliked === true || wire.isDisliked === true) return "dislike";
  if (
    wire.userLiked === true ||
    wire.isLiked === true ||
    wire.likedByUser === true
  ) {
    return "like";
  }
  const r =
    wire.userReaction ??
    wire.myReaction ??
    wire.userEngagement ??
    wire.engagement;
  if (r === "like" || r === "dislike") return r;
  if (typeof r === "string") {
    const lower = r.toLowerCase();
    if (lower === "like" || lower === "dislike") return lower;
  }
  return null;
}

export function normalizeUserEngagement(v) {
  return v === "like" || v === "dislike" ? v : null;
}

/** Optimistic counts — same rules as MFE `applyOptimisticEngagementCounts`. */
export function applyOptimisticEngagementCounts(
  before,
  action,
  setLike,
  setDislike,
) {
  if (action === "like") {
    if (before === "like") {
      setLike(c => Math.max(0, c - 1));
    } else if (before === "dislike") {
      setDislike(c => Math.max(0, c - 1));
      setLike(c => c + 1);
    } else {
      setLike(c => c + 1);
    }
    return;
  }
  if (before === "dislike") {
    setDislike(c => Math.max(0, c - 1));
  } else if (before === "like") {
    setLike(c => Math.max(0, c - 1));
    setDislike(c => c + 1);
  } else {
    setDislike(c => c + 1);
  }
}
