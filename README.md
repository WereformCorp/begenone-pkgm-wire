# @wereform/pkgm-wire

Wire UI components and layouts for short-form text content in the WeReform / BEGENONE platform.

This package provides building blocks for rendering, composing, and viewing “Wires” — lightweight, text-first posts with optional media, metadata, and interactions. It is designed for mobile-first usage with React Native and integrates seamlessly with shared menu and interaction components.

---

## Install

```bash
npm install @wereform/pkgm-wire
# or
yarn add @wereform/pkgm-wire
# or
pnpm add @wereform/pkgm-wire
```

---

## What this package gives you

- Wire UI components:

  - Channel metadata header for wires
  - Compact wire card layout
  - Full wire view layout
  - Wire upload / composer layout

- Features:

  - Multiline text rendering with line preservation
  - Media attachment support (images + videos)
  - Thumbnail generation for video attachments
  - Interaction menu integration (like, comment, share, more)

- Built for:

  - React Native / Expo
  - Text-centric social feeds
  - Composition with shared UI and menu packages

---

## Exports

From `@wereform/pkgm-wire` you can import:

```ts
import {
  WireChannelMetadata,
  WireCardLayout,
  WireUploadLayout,
  WireViewLayout,
} from "@wereform/pkgm-wire";
```

---

## Core components

## WireChannelMetadata

Displays channel-level metadata for a wire post.

### Props

```ts
WireChannelMetadata({
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  containerStyles,
});
```

- `channelLogo` Channel profile image URL
- `userName` Channel or user display name
- `subscribersCount` Subscriber count text
- `timeAgo` Relative publish time
- `viewsText` View count text
- `containerStyles` Optional style overrides

---

## WireCardLayout

Compact wire preview card used in feeds and lists.

### Props

```ts
WireCardLayout({
  content,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  onPress,
});
```

- Truncates long wire content
- Preserves line breaks
- Displays “See more” affordance
- Integrates interaction menu

---

## WireUploadLayout

Composer layout for creating and publishing new wires.

### Props

```ts
WireUploadLayout({
  profilePic,
  userName,
  onPressVideoUploadScreen,
  onPressWireUpload,
});
```

- Supports:

  - Multiline text input
  - Image and video attachments
  - Multiple media selection
  - Automatic video thumbnail generation

- Returns wire text and heading via callback

---

## WireViewLayout

Full wire detail view for reading and interacting with a single wire.

### Props

```ts
WireViewLayout({
  content,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  isItMe,
  onPressDeleteButton,
});
```

- Renders full wire content with preserved formatting
- Shows interaction menu
- Conditionally exposes delete action for owner

---

## Typical usage

```ts
<WireCardLayout
  content={wire.text}
  userName={wire.user.name}
  subscribersCount={wire.subscribers}
  timeAgo={wire.timeAgo}
  viewsText={wire.views}
/>

<WireUploadLayout
  userName="Areesh"
  onPressWireUpload={(text, heading) => createWire(text, heading)}
/>
```

---

## Design philosophy

- Text-first, lightweight content
- UI-only package
- No API calls or persistence logic
- Preserves author formatting and intent
- Designed to scale with feeds and detail views

---

## License

```
MIT License

Copyright (c) 2025 WeReform / BEGENONE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
