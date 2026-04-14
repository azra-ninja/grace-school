// layouts/PublicLayout.tsx
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="bg-[#0D1117] min-h-screen flex items-center justify-center text-white">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
