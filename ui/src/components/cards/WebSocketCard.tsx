import { useEffect, useState } from "react";
import { createHeartbeatClient, type HeartbeatMessage } from "../../services/websocketService";
import type { CSSProperties } from "react";

export default function WebSocketCard() {
  const [connected, setConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<HeartbeatMessage | null>(null);
  const [messageCount, setMessageCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createHeartbeatClient({
      onConnect: () => {
        setConnected(true);
        setError(null);
      },
      onDisconnect: () => {
        setConnected(false);
      },
      onError: (err) => {
        setError(err);
      },
      onMessage: (message) => {
        setLastMessage(message);
        setMessageCount((prev) => prev + 1);
      }
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <section style={cardStyle}>
      <h2>WebSocket</h2>
      <p><strong>Connected:</strong> {connected ? "Yes" : "No"}</p>
      <p><strong>Message Count:</strong> {messageCount}</p>
      {lastMessage && (
        <>
          <p><strong>Last Message:</strong> {lastMessage.message}</p>
          <p><strong>Timestamp:</strong> {lastMessage.timestamp}</p>
        </>
      )}
      {error && <p style={{ color: "#fca5a5" }}>Error: {error}</p>}
    </section>
  );
}

const cardStyle: CSSProperties = {
  background: "#1f2937",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #374151",
};