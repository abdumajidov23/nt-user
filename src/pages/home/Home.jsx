import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-blue-300  to-gray-900 text-white flex items-center justify-center">
      <div className="relative w-full max-w-4xl bg-gray-800/90 p-8 rounded-2xl shadow-2xl">
        <div className="absolute -top-10 -left-10 w-32 h-30 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-warmGray-50">
          Xush Kelibsiz!
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/create-user"
              className="px-6 py-3 bg-green-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-500 hover:scale-105 transform transition-all duration-300"
            >
              Yangi Foydalanuvchi
            </a>
            <a
              href="/users"
              className="px-6 py-3 bg-green-600 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-500 hover:scale-105 transform transition-all duration-300"
            >
              Foydalanuvchilarni Ko'rish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
