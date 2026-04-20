import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Users from "./pages/Users";
import Students from "./pages/Students";
import UpdateUser from "./pages/UpdateUser";
import CreateUser from "./pages/CreateUser";
import CreateStudent from "./pages/CreateStudent";
import UpdateStudent from "./pages/UpdateStudent";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* User Routes */}
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/update/:id" element={<UpdateUser />} />
            {/* Student Routes */}
            <Route path="/students" element={<Students />} />
            <Route path="/students/create" element={<CreateStudent />} />
            <Route path="/students/update/:id" element={<UpdateStudent />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
