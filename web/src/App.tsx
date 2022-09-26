import { useState } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import channel_data from "./data/channels_total.json";
import DM_data from "./data/DMs_total.json";

function App() {
  const [activeChannel, setActiveChannel] = useState(
    channel_data.channels[0].name
  );
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        MDSlack
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%"
        }}
      >
        <div
          style={{
            width: 200,
          }}
        >
          <h1
            style={{
              textAlign: "center",
              width: 200,
            }}
          >
            Channels
          </h1>
          <ListContainer
            channels={channel_data.channels}
            setActiveChannel={setActiveChannel}
          />
          <h1
            style={{
              textAlign: "center",
            }}
          >
            DMs
          </h1>
          <ListContainer
            channels={DM_data.channels}
            setActiveChannel={setActiveChannel}
          />
        </div>
        <div
          style={{
            width: "max-content",
            flexBasis: "100%",
            backgroundColor: "black",
            paddingLeft: 50,
            height: "100%",
          }}
        >
          <h2># {activeChannel}</h2>
          {channel_data.channels
            .concat(DM_data.channels)
            .filter((channel) => channel.name === activeChannel)
            .map((channel) => {
              return channel.messages.map((message) => {
                return (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {message.name}
                      </p>
                      <p
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {message.date}
                      </p>
                    </div>
                    <p>{message.message}</p>
                  </div>
                );
              });
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
