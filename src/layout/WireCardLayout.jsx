import { Text, TouchableOpacity, View } from "react-native";
import { MenuChannelMeta, MenuInteraction } from "@wereform/pkgm-shared";
import { Ionicons } from "@expo/vector-icons";
import { WireChannelMetadata } from "../components/WireChannelMetadata";
import { WireCardLayoutStyles } from "../styles/WireCardLayoutStyles";

export function WireCardLayout({
  content,
  channelLogo,
  userName,
  subscribersCount,
  timeAgo,
  viewsText,
  onPress,
}) {
  const limit = 8;

  const contentText =
    content ??
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem
            distinctio porro qui minus totam eius. Sed laudantium nisi expedita
            distinctio dignissimos dicta praesentium nihil iste velit cumque!
            Assumenda illum veritatis, ipsam sint
            
            vero corporis distinctio rem
            quisquam natus iste. Unde esse consequuntur maiores repellendus, cum
            voluptatem vero incidunt temporibus.`;

  // Only compute finalText if we actually have content
  const finalText = contentText
    ? contentText.replace(/\r\n/g, "\n").split("\n")
    : [];

  return (
    <TouchableOpacity style={WireCardLayoutStyles.container} onPress={onPress}>
      <View>
        <WireChannelMetadata
          channelLogo={
            channelLogo ||
            "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg"
          }
          userName={userName}
          subscribersCount={subscribersCount}
          timeAgo={timeAgo}
          viewsText={viewsText}
        />

        <View style={WireCardLayoutStyles.mainTextContainer}>
          {finalText.length > 0 && (
            <Text numberOfLines={limit} style={WireCardLayoutStyles.mainText}>
              {finalText.map((text, index) => (
                <Text key={index}>
                  {text.trim().replace(/\s+/g, " ")}
                  {index < finalText.length - 1 ? "\n" : ""}
                </Text>
              ))}
            </Text>
          )}
          <Text> </Text>
          <Text style={WireCardLayoutStyles.seeMore}>See more →</Text>
        </View>
      </View>
      <MenuInteraction containerStyles={{ marginBottom: 12 }} />
    </TouchableOpacity>
  );
}
