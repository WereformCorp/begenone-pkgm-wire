import { ScrollView, Text, View } from "react-native";
import { WireChannelMetadata } from "../components/WireChannelMetadata";
import { WireCardLayoutStyles } from "../styles/WireCardLayoutStyles";
import {
  MenuInteraction,
  MenuChannelMeta,
  CustomizedButton,
} from "@wereform/pkgm-shared";
import { WireViewLayoutStyles } from "../styles/WireViewLayoutStyles";
import { useState } from "react";

export function WireViewLayout({
  content,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  isItMe,
  onPressDeleteButton,
}) {
  const [isPressed, setPressed] = useState(false);

  const contentText =
    content ??
    `Curiosity is the real engine of progress. You don’t need certainty — you need movement. Every experiment, every failure, every weird idea you chase sharpens your understanding of reality. 

Stop waiting to “figure it out” first. Dive in, break things, rebuild smarter. The mind grows through friction, not comfort. 

Mastery isn’t perfection; it’s the relentless act of returning to the edge — again and again — until the unknown feels like home. The goal isn’t to win. It’s to keep becoming.

#curiosity #growth #mindset #learning`;

  // Only compute finalText if we actually have content
  const finalText = contentText
    ? contentText.replace(/\r\n/g, "\n").split("\n")
    : [];

  function togglePressed() {
    setPressed(prev => !prev);
  }

  return (
    <ScrollView
      style={WireViewLayoutStyles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={WireViewLayoutStyles.secondaryContainer}>
        <MenuChannelMeta
          containerStyles={{
            marginTop: 0,
            paddingBottom: 12,
            marginLeft: 0,
            marginRight: 0,
          }}
          channelLogo={channelLogo}
          userName={userName}
          subscribersCount={subscribersCount}
          timeAgo={timeAgo}
          viewsText={viewsText}
        />
        <View>
          <Text style={WireViewLayoutStyles.mainText}>
            {finalText.length > 0 && (
              <Text style={WireViewLayoutStyles.mainText}>
                {finalText.map((text, index) => (
                  <Text key={index}>
                    {text.trim().replace(/\s+/g, " ")}
                    {index < finalText.length - 1 ? "\n" : ""}
                  </Text>
                ))}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View>
        <MenuInteraction pressed={togglePressed} />

        {isItMe && isPressed && (
          <CustomizedButton
            label={"Delete"}
            textColor={"white"}
            style={[
              { backgroundColor: "red", marginTop: 12 },
              isItMe
                ? {
                    position: "absolute",
                    width: 80,
                    height: 35,
                    right: 24,
                    bottom: 48,
                  }
                : "",
            ]}
            onPress={() => {
              console.log("DELETE PRESSED");
              onPressDeleteButton();
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}
