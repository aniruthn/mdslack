import MessageInterface from "./MessageInterface";

export default interface ChannelInterface {
  people: string[];
  name: string;
  messages: MessageInterface[];
}
