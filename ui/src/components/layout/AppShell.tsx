import type { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

export default function AppShell({ children }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#111827", color: "#f9fafb" }}>
      <Header />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px" }}>
        {children}
      </main>
    </div>
  );
}