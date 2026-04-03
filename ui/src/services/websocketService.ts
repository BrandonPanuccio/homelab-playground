import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

export type HeartbeatMessage = {
  message: string;
  timestamp: string;
};

type ConnectHandlers = {
  onMessage: (message: HeartbeatMessage) => void;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: string) => void;
};

export function createHeartbeatClient(handlers: ConnectHandlers) {
  const client = new Client({
    webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
    reconnectDelay: 3000,
    onConnect: () => {
      handlers.onConnect?.();

      client.subscribe("/topic/heartbeat", (frame) => {
        const payload = JSON.parse(frame.body) as HeartbeatMessage;
        handlers.onMessage(payload);
      });
    },
    onStompError: (frame) => {
      handlers.onError?.(frame.headers["message"] || "WebSocket STOMP error");
    },
    onWebSocketClose: () => {
      handlers.onDisconnect?.();
    }
  });

  return client;
}