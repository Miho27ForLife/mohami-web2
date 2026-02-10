import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div style={{ minHeight: "100vh", padding: 24 }}>
      <Outlet />
    </div>
  );
}
