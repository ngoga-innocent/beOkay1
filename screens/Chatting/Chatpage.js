import React, { useEffect, useCallback, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Avatar } from "react-native-elements";
import { width, height, COLORS } from "../../components/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import FontAwasome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { PDFView } from "react-native-view-pdf";
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
  Actions,
  Composer,
  Message,
} from "react-native-gifted-chat";
import { Audio, Video } from "expo-av";

const Chatpage = ({ navigation, route }) => {
  const name = route.params.name;
  const image = route.params.image;
  const available = route.params.available;

  const [messages, setMessages] = useState([]);
  const [audioPlayer, setAudioPlayer] = useState(null);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hello ${name}`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const audioRecorderPlayer = new AudioRecorderPlayer();
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        renderMessageDocument={(messageProps) => (
          <DocumentMessage {...messageProps} />
        )}
        renderMessageAudio={(messageProps) => (
          <AudioMessage {...messageProps} onPress={handleAudioPress} />
        )}
        renderMessageVideo={renderMessageVideo}
        wrapperStyle={{
          right: { backgroundColor: COLORS.doctor },
        }}
        textStyle={{
          right: {
            color: COLORS.black,
          },
        }}
      />
    );
  };
  const DocumentMessage = ({ currentMessage }) => {
    const { document } = currentMessage;

    const handleDocumentPress = () => {
      // Implement your logic to handle the document press
      // For example, you can open the PDF in a separate screen or download it.
      // You can use a third-party library like 'react-native-pdf' to handle PDF rendering.
    };

    return (
      <TouchableOpacity onPress={handleDocumentPress}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
          <Text>{document.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const handleRecordVoice = async () => {
    try {
      const audioPath = await audioRecorderPlayer.startRecorder();
      // Handle the audio recording path here
      console.log("Recorded audio path:", audioPath);
    } catch (error) {
      console.log("Error recording audio:", error);
    }
  };
  const renderComposer = (props) => (
    <Composer
      {...props}
      multiline={true}
      placeholder="Type a message..."
      textInputStyle={{ marginBottom: 10 }}
    />
  );
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={handleRecordVoice}>
            <View
              style={{
                alignSelf: "center",
                width: width / 10,
                height: width / 10,
                borderRadius: width / 20,
                backgroundColor: COLORS.black,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
                marginRight: 7,
              }}
            >
              <MaterialIcons
                name="microphone"
                color={COLORS.doctor}
                size={30}
              />
            </View>
          </TouchableOpacity>
          <TouchableWithoutFeedback>
            <View
              style={{
                alignSelf: "center",
                width: width / 10,
                height: width / 10,
                borderRadius: width / 20,
                backgroundColor: COLORS.black,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
                marginRight: 7,
              }}
            >
              <MaterialIcons name="send" color={COLORS.doctor} size={30} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Send>
    );
  };
  const scrollToBottomComponent = () => {
    return (
      <FontAwasome
        name="angle-double-down"
        size={32}
        color={COLORS.backgrounds}
      />
    );
  };
  const renderActions = (props) => {
    const handleImagePick = async () => {
      try {
        const permissionResult =
          await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
          console.log("Permission to access media library denied");
          return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: true,
        });

        if (!result.cancelled) {
          const selectedImages = result.selected.map((image) => {
            const { uri, width, height } = image;
            return {
              _id: Math.round(Math.random() * 1000000),
              image: {
                uri,
                width,
                height,
              },
              user: {
                _id: 1,
              },
              createdAt: new Date(),
            };
          });

          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, selectedImages)
          );

          console.log("Selected images:", selectedImages);
        }
      } catch (error) {
        console.log("Error picking images:", error);
      }
    };

    const handleVideoPick = async () => {
      try {
        const permissionResult =
          await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
          console.log("Permission to access media library denied");
          return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsMultipleSelection: true,
        });

        if (!result.cancelled) {
          const selectedVideos = result.selected.map((video) => {
            const { uri, width, height, duration } = video;

            const videoMessage = {
              _id: Math.round(Math.random() * 1000000),
              video: {
                uri,
                width,
                height,
                duration,
              },
              user: {
                _id: 1,
              },
              createdAt: new Date(),
            };

            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, [videoMessage])
            );

            console.log("Picked video:", { uri, width, height, duration });

            return videoMessage;
          });
        }
      } catch (error) {
        console.log("Error picking video:", error);
      }
    };

    const handleDocumentPick = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: "application/pdf",
        });

        if (result.type === "success") {
          // Handle the picked document here

          const { uri, name, size } = result;

          const documentMessage = {
            _id: Math.round(Math.random() * 1000000),
            file: {
              uri,
              name,
              size,
            },
            user: {
              _id: 1,
            },
            createdAt: new Date(),
          };
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [documentMessage])
          );
          console.log("Picked document:", result);
        } else {
          console.log("Document picking cancelled");
        }
      } catch (error) {
        console.log("Error picking document:", error);
      }
    };
    return (
      <Actions
        {...props}
        options={{
          Document: handleDocumentPick,
          Image: handleImagePick,
          Video: handleVideoPick,
          Cancel: () => {
            console.log("Cancel");
          },
        }}
        onSend={(args) => console.log(args)}
      />
    );
  };
  const renderMessageVideo = (props) => {
    const { currentMessage } = props;
    return (
      <View style={{ padding: 20 }}>
        <Video
          resizeMode="cover"
          useNativeControls
          //   shouldPlay={false}
          source={{ uri: currentMessage.video.uri }}
          style={{ width: width / 2, height: width / 2 }}
        />
      </View>
    );
  };
  const renderMessageImage = (props) => {
    const { currentMessage } = props;
    return (
      <View style={{ padding: 20 }}>
        <Image
          resizeMode="cover"
          source={{ uri: currentMessage.image.uri }}
          style={{ width: width / 2, height: width / 2 }}
        />
      </View>
    );
  };
  const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={{ borderRadius: 20 }} />;
  };
  //   const handleAudioPress = async (audioUrl) => {
  //     const soundObject = new Audio.Sound();

  //     try {
  //       await soundObject.loadAsync({ uri: audioUrl });
  //       await soundObject.playAsync();
  //     } catch (error) {
  //       console.log("Failed to load audio", error);
  //     }
  //   };
  const CustomMessage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.file) {
      return (
        <View>
          <Text>{currentMessage.file.name}</Text>
          <TouchableOpacity
          // onPress={() => handleDocumentOpen(currentMessage.file.uri)}
          >
            <Text>Open Document</Text>
          </TouchableOpacity>
        </View>
      );

      // Render document as a link or an embedded document viewer
      // return (
      //   <View>e
      //     <Text>{currentMessage.file.name}</Text>
      //     {/* Render a link or an embedded document viewer */}
      //   </View>
      // );
    }

    // Render regular text message
    return <Message {...props} />;
  };
  const ChatUI = () => {
    return (
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: name,
          avatar: image,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderInputToolbar={renderInputToolbar}
        renderActions={renderActions}
        renderComposer={renderComposer}
        renderMessageVideo={renderMessageVideo}
        renderMessageImage={renderMessageImage}
        renderMessage={(props) => <CustomMessage {...props} />}

        // onPressActionButton={handleRecordVoice}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: width / 40,
          paddingVertical: height / 80,
          backgroundColor: COLORS.chatheader,
          borderRadius: width / 40,
          marginTop: height / 100,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar source={image} size="medium" rounded />
          <View style={{ marginLeft: width / 40 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 7 }}>
              {name}
            </Text>
            <Text>{available}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: width / 10,
              height: width / 10,
              backgroundColor: COLORS.black,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: width / 10,
              //  xz1BVC1X1CV
            }}
          >
            <Feather name="phone" size={25} color={COLORS.doctor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width / 10,
              height: width / 10,
              backgroundColor: COLORS.black,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: width / 10,
            }}
          >
            <FontAwasome name="video-camera" size={25} color={COLORS.doctor} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: width / 10,
              height: width / 10,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: width / 10,
            }}
          >
            <FontAwasome name="plus" size={25} color={COLORS.doctor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width / 10,
              height: width / 10,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: width / 10,
            }}
          >
            <Feather name="phone-off" size={25} color={COLORS.doctor} />
          </TouchableOpacity>
        </View>
      </View>
      <ChatUI />
    </View>
  );
};

export default Chatpage;
