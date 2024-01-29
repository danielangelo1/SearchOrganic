import React from "react";

interface ProtectedRouteProps {
  children: React.ReactElement;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const logged = localStorage.getItem("isLogged");

  return logged === "true" ? children : <p>Você não está logado</p>;
};

export default ProtectedRoute;
