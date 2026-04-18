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

        <nav className="flex flex-col gap-4 mt-16">
          <Link className="hover:text-[#343483]" to="/dashboard">
            Home
          </Link>
          <Link className="hover:text-[#343483]" to="/users">
            Users
          </Link>
          <Link className="hover:text-[#343483]" to="/students">
            Students
          </Link>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-[#111827] flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Version 1</h1>

          <button
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-500"
            onClick={handleLogout}
          >
            Logout
          </button>
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
