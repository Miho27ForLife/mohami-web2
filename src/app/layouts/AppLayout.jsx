import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div style={{ minHeight: "100vh", padding: 24 }}>
      <h2>App Layout</h2>
      <Outlet />
    </div>
  );
}
