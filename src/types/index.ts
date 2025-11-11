export enum ConversationStatus {
  Incoming = "Incoming",
  Outgoing = "Outgoing",
  Missed = "Missed",
  None = "None",
}

export interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  status: ConversationStatus;
}

export interface Message {
  id: number;
  text: string;
  timestamp: string;
  sender: "me" | "them";
  read: boolean;
}

export interface Contact {
  id: number;
  name: string;
  phone: string;
  avatar: string;
}
