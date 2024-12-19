"use client";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md py-6 px-4">
          <nav className="space-y-4">
            <a
              href="#overview"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-700 font-medium"
            >
              Overview
            </a>
            <a
              href="#reports"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-700 font-medium"
            >
              Reports
            </a>
            <a
              href="#settings"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-700 font-medium"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-grow p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-bold text-gray-800">Total Users</h2>
              <p className="text-3xl font-semibold text-blue-500 mt-2">1,024</p>
            </div>

            {/* Card 2 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-bold text-gray-800">Revenue</h2>
              <p className="text-3xl font-semibold text-green-500 mt-2">$12,340</p>
            </div>

            {/* Card 3 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-bold text-gray-800">Active Sessions</h2>
              <p className="text-3xl font-semibold text-purple-500 mt-2">342</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
