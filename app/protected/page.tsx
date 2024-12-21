import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

const DashboardPage = () => {
  return (
    <div className="flex items-center justify-center text-center min-h-screen">
      Dashboard
    </div>
  );
};

export default ProtectedRoute(DashboardPage, ["your-role"]);
