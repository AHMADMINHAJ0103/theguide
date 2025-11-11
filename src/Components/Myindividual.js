import React from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { myspaceData } from "../myspaceData";

export default function MyIndividual() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Use passed state if available; otherwise, find by id
  const item =
    location.state?.item || myspaceData.find((a) => String(a.id) === String(id));

  if (!item) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-center text-white bg-[#1a1a1a]">
        <p className="text-lg sm:text-xl md:text-2xl">Content not found.</p>
        <div className="mt-4">
          <Link
            to="/myspace"
            className="text-red-400 underline hover:text-red-500 transition"
          >
            Back to My Space
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#2F0D0A] to-[#9B2A22] text-white px-4 sm:px-8 md:px-16 lg:px-24 py-10 font-sans">
      <div className="max-w-4xl mx-auto bg-[#3B0A07]/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/10">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[350px] object-cover rounded-2xl mb-8 shadow-lg"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-red-300 via-pink-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
          {item.title}
        </h1>

        <div className="text-center mb-6">
          <p className="text-gray-300 text-lg font-medium">By {item.author}</p>
          {item.time && (
            <p className="text-gray-400 text-sm italic">{item.time}</p>
          )}
        </div>

        <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-gray-100">
          {item.description}
        </p>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 text-white py-2 px-6 sm:px-8 rounded-lg hover:bg-red-700 transition duration-300"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
