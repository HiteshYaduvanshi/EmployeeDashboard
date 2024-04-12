import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/");
  }, [navigate]);
  return null;
}

export default ErrorPage;
