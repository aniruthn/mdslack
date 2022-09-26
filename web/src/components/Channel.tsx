import ChannelInterface from "../models/ChannelInterface";

const Channel = ({ people, name, setActiveChannel }: ChannelInterface & {setActiveChannel: (name: string) => void}) => {
  return (
    <p
      onClick={() => {
        setActiveChannel(name);
      }}
      style={{
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        cursor: "pointer",
      }}
    >
      # {name}
    </p>
  );
};

export default Channel;
