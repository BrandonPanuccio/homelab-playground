export default function Header() {
  return (
    <header
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #374151",
        background: "#0f172a",
      }}
    >
      <h1 style={{ margin: 0 }}>Homelab Playground</h1>
      <p style={{ margin: "6px 0 0 0", color: "#cbd5e1" }}>
        Local protocol lab for REST, WebSocket, and gRPC
      </p>
    </header>
  );
}