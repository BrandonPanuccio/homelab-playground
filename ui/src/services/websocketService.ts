import { Client } from "@stomp/stompjs";
import type { HeartbeatMessage } from "../types/HeartbeatMessage"

type ConnectHandlers = {
  onMessage: (message: HeartbeatMessage) => void;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: string) => void;
};

export function createHeartbeatClient(handlers: ConnectHandlers) {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const host = window.location.host;

  const client = new Client({
    brokerURL: `${protocol}://${host}/ws`,
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