import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/*
  WireCardLayoutStyles

  Purpose:
  Styles for the Wire card container and text content used in
  short-form, text-first Wire posts.

  Design constraints:
  - Card spacing and padding are tuned for feed readability.
  - Background and border radius must remain consistent with
    global design tokens to avoid visual drift across feeds.
  - Height is flexible, but constrained to prevent runaway text
    from breaking scroll performance.
*/

export const WireCardLayoutStyles = StyleSheet.create({
  container: {
    /*
      Core card container for a single Wire.

      Intent:
      - Flexible height to accommodate variable text length.
      - Space-between ensures metadata and actions stay anchored.
      - Margin creates separation between feed items.
    */
    width: "auto",
    minHeight: 200,
    justifyContent: "space-between",
    // aspectRatio intentionally disabled; text-driven cards must grow vertically
    margin: 12,
    padding: 12,
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary100,
  },

  mainTextContainer: {
    /*
      Wrapper around the main Wire text.

      Constraint:
      - maxHeight prevents extremely long posts from dominating
        the feed and degrading scroll performance.
      - Rounded edges visually separate text from card background.
    */
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    maxHeight: 360,
  },

  mainText: {
    /*
      Primary Wire text styling.

      Readability choices:
      - Slightly increased lineHeight for dense text blocks.
      - Subtle letterSpacing improves legibility on mobile screens.
    */
    color: "#ddd",
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.3,
  },

  seeMore: {
    /*
      "See more" affordance for truncated text.

      Intent:
      - Visually distinct but not dominant.
      - Must remain tappable and readable on small screens.
    */
    color: "#fff",
    fontWeight: "600",
    marginTop: 4,
    fontSize: 14,
  },
});
