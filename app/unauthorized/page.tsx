import React from "react";
import { useRouter } from "next/navigation";

const UnauthorizedPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        onClick={handleGoBack}
      >
        Kembali{" "}
      </button>
    </div>
  );
};

export default UnauthorizedPage;
