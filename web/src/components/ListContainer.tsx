import ListContainerInterface from "../models/ListContainerInterface";
import Channel from "./Channel";

const ListContainer = ({
  channels,
  setActiveChannel,
}: ListContainerInterface & {setActiveChannel: (name: string) => void}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {channels.map((channel) => {
        return (
          <Channel
            key={channel.name}
            messages={channel.messages}
            name={channel.name}
            people={channel.people}
            setActiveChannel={setActiveChannel}
          />
        );
      })}
    </div>
  );
};

export default ListContainer;
