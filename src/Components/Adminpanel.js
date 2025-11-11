// src/pages/AdminPanel.jsx
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-96 text-center border border-white/10">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <p className="text-gray-300 mb-6">
          Welcome, <span className="font-semibold text-red-400">theguide</span>!
        </p>

        <div className="flex flex-col gap-4">
          <button className="bg-red-600 hover:bg-red-700 py-2 rounded transition">
            View Reports
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded transition">
            Manage Users
          </button>
          <button className="bg-green-600 hover:bg-green-700 py-2 rounded transition">
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="bg-gray-600 hover:bg-gray-700 py-2 rounded transition mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
