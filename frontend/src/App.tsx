import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Users from "./pages/Users";
import Student from "./pages/Student";
import UpdateUser from "./pages/UpdateUser";
import CreateUser from "./pages/CreateUser";

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
            <Route path="/users" element={<Users />} />
            <Route path="/students" element={<Student />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/update/:id" element={<UpdateUser />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
