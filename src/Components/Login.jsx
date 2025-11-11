// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "theguide" && password === "723723") {
      setSuccess(true);
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/admin"), 1500);
    } else {
      setSuccess(false);
      setMessage("❌ Invalid username or password");
    }
  };

  const handleClose = () => {
    navigate("/"); // change this route if you want it to go elsewhere
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-800 via-red-900 to-black">
      <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-80 text-center text-white border border-white/20">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white text-xl font-bold hover:text-red-400 transition"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 rounded bg-white/20 focus:outline-none placeholder-gray-200"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-white/20 focus:outline-none placeholder-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              success ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
