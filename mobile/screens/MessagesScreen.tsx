import { Image, ScrollView, Text, View } from "react-native";
import profilePics from "../data/profile_pics";

const MessagesScreen = ({ route }: any) => {
  const { channelData } = route.params;
  const messages = channelData.messages;
  return (
    <ScrollView>
      {messages.map((message: any) => {
        const { name, date } = message;
        // @ts-ignore
        const image = profilePics[name];
        return (
          <View
            key={date}
            style={{
              margin: 5,
              marginTop: 100,
              marginBottom: 100,
            }}
          >
            <Image
              source={image}
              style={{
                justifyContent: "center",
                margin: 10,
                height: 100,
                width: "100%",
                resizeMode: "contain",
              }}
            />
            <Text>{date}</Text>
            <Text>{name}</Text>
            <Text>{message.message}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MessagesScreen;
