import { myspaceData } from "../myspaceData";
import { Link, useNavigate } from "react-router-dom";

export default function Myspace() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#9B2A22] via-[#4B0F0C] to-[#2F0D0A] flex flex-col items-center justify-center px-4 py-10 text-white">

      {/* 🟢 Top Buttons */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
        <button
          onClick={() => navigate("/myspaceform")}
          className="w-full sm:w-auto px-6 py-3 bg-white/10 border border-white/30 text-white text-base font-medium rounded-full hover:bg-white/20 transition-all backdrop-blur-sm shadow-lg"
        >
          ✍️ Share Your Creation
        </button>
      </div>

      {/* 🔙 Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400 transition-colors"
      >
        ×
      </button>

      {/* 🔴 Heading */}
      <div className="mt-28 mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-yellow-200 drop-shadow-lg">
            My Space
          </span>
        </h1>
        <p className="text-gray-200 mt-3 text-base sm:text-lg italic">
          Where words breathe and imaginations bloom 🌙
        </p>
      </div>

      {/* 🟣 Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full">
        {myspaceData.map((item) => (
          <div
            key={item.id}
            className="relative h-64 bg-[#3B0A07] rounded-2xl overflow-hidden shadow-lg group transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-300 mb-4">By {item.author}</p>
              <Link
                to={`/myindividual/${item.id}`}
                state={{ item }}
                className="inline-block px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Read
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
