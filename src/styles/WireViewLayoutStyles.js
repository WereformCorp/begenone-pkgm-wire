import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/*
  WireViewLayoutStyles

  Purpose:
  Styles for the full Wire view screen, where a single Wire
  is read in isolation (expanded, focused context).

  Design constraints:
  - Prioritize long-form readability over feed density.
  - Spacing is intentionally more generous than card layouts.
  - Bottom margin reserves space for fixed actions or navigation.
*/

export const WireViewLayoutStyles = StyleSheet.create({
  container: {
    /*
      Primary container for an expanded Wire.

      Intent:
      - Acts as a reading surface, not a feed card.
      - Increased horizontal padding improves text legibility.
      - Bottom margin prevents overlap with persistent UI elements.
    */
    width: "auto",
    margin: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary200,
    marginBottom: 96,
  },

  secondaryContainer: {
    /*
      Inner vertical stack for content blocks
      (text, metadata, media, actions).

      Constraint:
      - Column layout ensures predictable reading flow.
    */
    flexDirection: "column",
    paddingBottom: 24,
  },

  mainText: {
    /*
      Primary Wire text in expanded view.

      Readability choices:
      - Larger fontSize and lineHeight than feed cards.
      - Optimized for sustained reading, not scanning.
    */
    color: "#fff",
    lineHeight: 28,
    fontSize: 18,
  },
});
