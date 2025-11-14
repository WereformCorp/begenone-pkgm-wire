import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import { Ionicons } from "@expo/vector-icons";
import { WireUploadStyles } from "../styles/WireUploadStyles";
import { CustomizedButton, DropDown, InputField } from "@begenone/pkgm-shared";

export function WireUploadLayout({ profilePic, userName }) {
  const [wireText, setWireText] = useState(``);
  const [media, setMedia] = useState(null); // image/video URI
  const [thumbnails, setThumbnails] = useState([]);

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsMultipleSelection: true,
      selectionLimit: 4,
      quality: 1,
    });

    if (result.canceled) return;

    const assets = result.assets;

    // Save raw assets
    setMedia(assets);

    // Generate thumbnails for videos, or use image URI directly
    const finalThumbs = await Promise.all(
      assets.map(async asset => {
        const isVideo =
          asset.type === "video" || asset.mimeType?.startsWith("video");

        if (isVideo) {
          try {
            const { uri } = await VideoThumbnails.getThumbnailAsync(asset.uri, {
              time: 1000,
            });
            return uri;
          } catch (err) {
            console.log("Video thumbnail error:", err);
            return null;
          }
        }

        // Image → use directly
        return asset.uri;
      })
    );

    console.log(finalThumbs);

    setThumbnails(finalThumbs);
  };

  console.log(wireText);

  return (
    <ScrollView>
      <View style={WireUploadStyles.container}>
        <View style={WireUploadStyles.profileSection}>
          <Image
            source={{
              uri:
                profilePic ||
                "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
            }}
            style={WireUploadStyles.userImage}
          />

          <View style={WireUploadStyles.userInfo}>
            <Text style={WireUploadStyles.userName}>
              {userName || "Default Username"}
            </Text>

            {/* Link to user's public-facing channel page */}
            <TouchableOpacity
              onPress={() => Linking.openURL("https://begenone.com")}
            >
              <Text style={WireUploadStyles.channelSettingsText}>
                View Channel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 1 — Composer Input */}
        <View style={WireUploadStyles.wireInputContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "900",
                fontSize: 24,
                paddingBottom: 12,
                flexGrow: 1,
                justifyContent: "flex-start",
              }}
            >
              Create <Text style={{ color: "#ff6000" }}>Wire</Text>
            </Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 14,
                paddingBottom: 12,
                // flexGrow: 1,

                alignSelf: "center",
              }}
            >
              Post a <Text style={{ color: "#ff6000" }}>Video</Text>
            </Text>
          </View>
          <View style={WireUploadStyles.wireInputTextContainer}>
            <InputField
              multiline
              placeholder="Write your Wire..."
              inputWrapper={WireUploadStyles.inputWrapper}
              inputStyle={WireUploadStyles.aboutTextArea}
              value={wireText}
              onChangeText={setWireText}
            />

            {/* 2 — Media Preview (always below text) */}
            <View style={WireUploadStyles.mediaContainer}>
              {thumbnails.map((uri, index) => (
                <TouchableOpacity key={index} onPress={pickMedia}>
                  <Image
                    source={{ uri }}
                    style={WireUploadStyles.mediaThumb}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* 3 — Upload Button */}
            <View style={WireUploadStyles.uploadButtonContainer}>
              <TouchableOpacity style={WireUploadStyles.AIGenerateButton}>
                <Ionicons name="sparkles-outline" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={pickMedia}
                style={WireUploadStyles.uploadImageButton}
              >
                <Ionicons name="image" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <DropDown
            styles={{
              marginLeft: 0,
              marginRight: 0,
              marginTop: 18,
              // paddingRight: 24,
            }}
            iconStyles={{ paddingRight: 16 }}
            selectText={"Select Age Group"}
            data={[
              { key: 1, label: "Under 14 of age" },
              { key: 2, label: "Above 14 of age" },
            ]}
          />

          <DropDown
            styles={{ marginLeft: 0, marginRight: 0, marginTop: 18 }}
            selectText={"Comments"}
            iconStyles={{ paddingRight: 16 }}
            data={[
              { key: 1, label: "Turn — ON" },
              { key: 2, label: "Turn — OFF" },
            ]}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "auto",
            justifyContent: "space-between",

            marginTop: 60,
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <CustomizedButton
            label={"Post Video"}
            style={{
              backgroundColor: "#ff6000",
              marginRight: 6,
            }}
            fontWeight={"900"}
            textColor={"#fff"}
          />
          <CustomizedButton
            label={"Schedule"}
            style={{
              backgroundColor: "#7f7f7f",
              marginLeft: 6,
            }}
            fontWeight={"900"}
            textColor={"#fff"}
          />
        </View>

        {/* 4 — Future AI Row */}
        {/* <WireAIBar text={text} onChange={setText} /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
