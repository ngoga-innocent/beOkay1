import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS, height, width } from "../../components/Colors";
import Header from "../../components/Header";
import { Audio, Video } from "expo-av";
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
  Actions,
  Composer,
  Message,
} from "react-native-gifted-chat";
// import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import FontAwasome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";

const Support = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [issue, setIssue] = useState(true);
  // const [containerHeight, setContainerHeight] = useState("100%");

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     () => {
  //       setContainerHeight("90%"); // Adjust the value as per your requirement
  //     }
  //   );

  //   const keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     () => {
  //       setContainerHeight("100%");
  //     }
  //   );

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);
  const IssueCategory = [
    { name: "Reporting System" },
    { name: "My Medical History" },
    { name: "Others" },
  ];
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
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
  const renderActions = (props) => {
    return (
      <Actions
        {...props}
        options={{
          // Document: handleDocumentPick,
          Image: handleImagePick,
          Video: handleVideoPick,
          Cancel: () => {
            console.log("Cancel");
          },
        }}
        iconTextStyle={{
          alignSelf: "center",
        }}
        onSend={(args) => console.log(args)}
      />
    );
  };
  const renderComposer = (props) => (
    <Composer
      {...props}
      multiline={true}
      placeholder="Type a message..."
      textInputStyle={{
        marginBottom: 10,
        borderRadius: 20,
        width: "100%",
        borderWidth: 1,
        padding: 7,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
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
          right: { backgroundColor: COLORS.doctor, marginBottom: height / 18 },
        }}
        textStyle={{
          right: {
            color: COLORS.black,
          },
        }}
      />
    );
  };
  // const renderMessage = ({ item }) => (
  //   <View style={styles.message}>
  //     <Text>{item.text}</Text>
  //   </View>
  // );
  const ChatUI = () => {
    return (
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: "Ngoga",
          avatar: "https://placeimg.com/140/140/any",
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        // renderInputToolbar={renderInputToolbar}
        renderActions={renderActions}
        renderComposer={renderComposer}
        renderMessageVideo={renderMessageVideo}
        renderMessageImage={renderMessageImage}

        // onPressActionButton={handleRecordVoice}
      />
    );
  };
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View
              style={{
                alignSelf: "center",
                width: width / 10,
                height: width / 10,
                borderRadius: width / 20,
                backgroundColor: COLORS.black,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 7,
                marginRight: 7,
                marginLeft: 7,
                alignSelf: "center",
              }}
            >
              <MaterialIcons
                name="send"
                color={COLORS.doctor}
                size={30}
                style={{ alignSelf: "center" }}
              />
            </View>
          </TouchableOpacity>
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
  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Header />
      <View style={styles.content}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 19,
            marginLeft: 4,
            marginBottom: 5,
          }}
        >
          Issues Category
        </Text>
        <FlatList
          horizontal
          data={IssueCategory}
          renderItem={({ item }) => {
            return (
              <TouchableWithoutFeedback>
                <TouchableOpacity
                  style={styles.issue}
                  onPress={() => {
                    setMessages((previousMessages) =>
                      GiftedChat.append(previousMessages, item)
                    );
                  }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
      <ChatUI />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  issue: {
    borderWidth: 1,
    borderColor: COLORS.consultationbg,
    borderRadius: width / 20,
    padding: height / 100,
    marginLeft: 4,
  },
  content: {
    position: "absolute",
    bottom: height / 15,
  },
});

export default Support;
