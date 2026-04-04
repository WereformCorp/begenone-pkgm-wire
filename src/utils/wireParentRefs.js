/**
 * Parent refs for type "comment" wires (aligned with mfe_wires SingleCard).
 */

export function shortenWireRefId(id) {
  if (id == null || id === "") return "";
  const s = String(id);
  return s.length > 8 ? `${s.slice(0, 8)}…` : s;
}

export function parentVideoIdFromWire(wire) {
  const v = wire?.parentVideo?._id ?? wire?.parentVideo?.id ?? wire?.parentVideo;
  if (v == null || v === "") return null;
  const s = String(v).trim();
  return s || null;
}

export function parentWireIdFromWire(wire) {
  const w = wire?.parentWire?._id ?? wire?.parentWire?.id ?? wire?.parentWire;
  if (w == null || w === "") return null;
  const s = String(w).trim();
  return s || null;
}

/**
 * @returns {{ kind: 'video'|'wire', id: string, label: string } | null}
 */
export function parentRefTargetFromWire(wire) {
  const pv = parentVideoIdFromWire(wire);
  if (pv) {
    return {
      kind: "video",
      id: pv,
      label: `watch/${shortenWireRefId(pv)}`,
    };
  }
  const pw = parentWireIdFromWire(wire);
  if (pw) {
    return {
      kind: "wire",
      id: pw,
      label: `wires/${shortenWireRefId(pw)}`,
    };
  }
  return null;
}
