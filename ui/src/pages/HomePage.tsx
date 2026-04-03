import AppShell from "../components/layout/AppShell";
import RestCard from "../components/cards/RestCard";
import WebSocketCard from "../components/cards/WebSocketCard";
import GrpcCard from "../components/cards/GrpcCard";

export default function HomePage() {
  return (
    <AppShell>
      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <RestCard />
        <WebSocketCard />
        <GrpcCard />
      </div>
    </AppShell>
  );
}