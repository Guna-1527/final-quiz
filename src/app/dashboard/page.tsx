"use client";

import Sidebar from "./sidebar";
import Navbar from "./navbar";
import DashboardContent from "./dashboard-content";

export default function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}
