import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import { Ionicons } from "@expo/vector-icons";
import { WireUploadStyles as S } from "../styles/WireUploadStyles";
import { CustomizedButton, DropDown, InputField } from "@wereform/pkgm-shared";

/**
 * WireUploadLayout
 *
 * Full wire composer layout with optional media, AI hooks, and settings.
 *
 * Responsibilities:
 * - Wire text composition
 * - Image/video selection with thumbnail previews
 * - Optional dropdowns for moderation & audience controls
 * - Entry point to video upload flow
 */

export function WireUploadLayout({
  profilePic,
  userName,
  onPressVideoUploadScreen,
  onPressWireUpload,
  showUploadContainers = false,
  showDropDowns = false,
}) {
  const [wireText, setWireText] = useState("");
  const [media, setMedia] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [heading, setHeading] = useState("Default Heading!");

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsMultipleSelection: true,
      selectionLimit: 4,
      quality: 1,
    });

    if (result.canceled) return;

    const assets = result.assets;
    setMedia(assets);

    const finalThumbs = await Promise.all(
      assets.map(async (asset) => {
        const isVideo =
          asset.type === "video" || asset.mimeType?.startsWith("video");

        if (isVideo) {
          try {
            const { uri } = await VideoThumbnails.getThumbnailAsync(
              asset.uri,
              { time: 1000 },
            );
            return uri;
          } catch (err) {
            console.log("Video thumbnail error:", err);
            return null;
          }
        }
        return asset.uri;
      }),
    );

    setThumbnails(finalThumbs);
  };

  return (
    <ScrollView style={S.scroll}>
      <View style={S.container}>
        {/* profile strip */}
        <View style={S.profileSection}>
          <View style={S.avatarWrapper}>
            <Image
              source={{
                uri:
                  profilePic ||
                  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
              }}
              style={S.avatarImage}
              resizeMode="cover"
            />
          </View>
          <View style={S.profileInfo}>
            <Text style={S.profileName}>
              {userName || "Default Username"}
            </Text>
          </View>
        </View>

        {/* form */}
        <View style={S.formArea}>
          {/* heading */}
          <View style={S.headingRow}>
            <Text style={S.heading}>
              Create <Text style={S.headingAccent}>Wire</Text>
            </Text>
            <Pressable
              onPress={onPressVideoUploadScreen}
              style={({ pressed }) => [
                S.videoLink,
                { opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Text style={S.videoLinkText}>
                Upload <Text style={S.videoLinkAccent}>Video</Text>
              </Text>
            </Pressable>
          </View>

          {/* composer */}
          <Text style={S.sectionLabel}>Compose</Text>
          <View style={S.composerCard}>
            <InputField
              multiline
              placeholder="Write your Wire..."
              inputWrapper={{ backgroundColor: "transparent", borderWidth: 0 }}
              inputStyle={S.composerInput}
              value={wireText}
              onChangeText={setWireText}
            />

            {/* media previews */}
            {thumbnails.length > 0 && (
              <View style={S.mediaGrid}>
                {thumbnails.map((uri, index) => (
                  <Pressable key={index} onPress={pickMedia}>
                    <View style={S.mediaThumb}>
                      <Image
                        source={{ uri }}
                        style={S.mediaThumbImage}
                        resizeMode="cover"
                      />
                    </View>
                  </Pressable>
                ))}
              </View>
            )}

            {/* toolbar */}
            {showUploadContainers && (
              <View style={S.toolbar}>
                <Pressable
                  style={({ pressed }) => [
                    S.toolbarBtn,
                    { opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Ionicons
                    name="sparkles-outline"
                    size={20}
                    color="rgba(255,255,255,0.5)"
                  />
                </Pressable>
                <Pressable
                  onPress={pickMedia}
                  style={({ pressed }) => [
                    S.toolbarBtn,
                    { opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Ionicons
                    name="image-outline"
                    size={20}
                    color="rgba(255,255,255,0.5)"
                  />
                </Pressable>
              </View>
            )}
          </View>

          {/* dropdowns */}
          {showDropDowns && (
            <>
              <Text style={S.sectionLabel}>Settings</Text>
              <View style={S.dropdownWrapper}>
                <DropDown
                  styles={S.dropdownOverride}
                  iconStyles={{ paddingRight: 16 }}
                  selectText="Select Age Group"
                  data={[
                    { key: 1, label: "Under 14 of age" },
                    { key: 2, label: "Above 14 of age" },
                  ]}
                />
              </View>
              <View style={S.dropdownWrapper}>
                <DropDown
                  styles={S.dropdownOverride}
                  selectText="Comments"
                  iconStyles={{ paddingRight: 16 }}
                  data={[
                    { key: 1, label: "Turn — ON" },
                    { key: 2, label: "Turn — OFF" },
                  ]}
                />
              </View>
            </>
          )}

          {/* actions */}
          <View style={S.actionRow}>
            <CustomizedButton
              label="Post Wire"
              style={S.postButton}
              textColor="#fff"
              onPress={() => onPressWireUpload(wireText, heading)}
            />
            <CustomizedButton
              label="Schedule"
              style={S.scheduleButton}
              isDisabled
              textColor="rgba(255,255,255,0.4)"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
