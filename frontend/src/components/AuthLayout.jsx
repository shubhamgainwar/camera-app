import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && isAuthenticated !== authentication) {
      navigate("/login");
    } else if (!authentication && isAuthenticated !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [isAuthenticated, navigate, authentication]);

  // loader ? <h1>Loading...</h1> : <>{children}</>

  return <>{children}</>;
};

export default AuthLayout;
