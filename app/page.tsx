"use client"

import Loading from "@/components/Loading";
import { useKeycloak } from "@react-keycloak/web";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const { keycloak, initialized } = useKeycloak();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (initialized) {
      setIsLoading(false);
    }
  }, [initialized]);

  const handleLogin = () => {
    if (!keycloak.authenticated) {
      keycloak.login();
    } else {
      keycloak.logout();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg" onClick={handleLogin}>
        {keycloak.authenticated ? "Keluar" : "Login via Keycloak"}
      </button>
    </div>
  );
};

export default LandingPage;
