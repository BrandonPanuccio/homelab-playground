import { useEffect, useState } from "react";
import { getSystemInfo } from "../../services/systemService";
import type { SystemInfo } from "../../types/system";

export default function RestCard() {
  const [data, setData] = useState<SystemInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const result = await getSystemInfo();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <section style={cardStyle}>
      <h2>REST</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "#fca5a5" }}>Error: {error}</p>}
      {data && (
        <>
          <p><strong>App:</strong> {data.appName}</p>
          <p><strong>Message:</strong> {data.message}</p>
          <p><strong>Server Time:</strong> {data.serverTime}</p>
        </>
      )}
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#1f2937",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #374151",
};