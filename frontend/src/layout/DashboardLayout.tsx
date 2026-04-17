import { Link, Outlet, useNavigate } from "react-router-dom";

// DashboardLayout.tsx
const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div className="flex min-h-screen bg-[#0D1117] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0E1722] p-4">
        <h2 className="text-xl font-bold mb-6">Grace School</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/dashboard">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/students">Students</Link>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-[#111827] flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Welcome</h1>

          <button className="bg-red-500 px-3 py-1 rounded" onClick={handleLogout}>Logout</button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
