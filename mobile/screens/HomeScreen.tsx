import { Button, View } from "react-native";
import channel_data from "./../data/channel_data.json";

const HomeScreen = ({ navigation }: any) => {
  const channelData = channel_data.channels;
  return (
    <View>
      {channelData.map((channel) => {
        return (
          <Button
            key={channel.name}
            title={`# ${channel.name}`}
            onPress={() =>
              navigation.navigate("Messages", { channelData: channel })
            }
          />
        );
      })}
    </View>
  );
};

export default HomeScreen;
