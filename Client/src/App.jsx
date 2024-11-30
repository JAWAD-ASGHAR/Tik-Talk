import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import { useAppStore } from "./store";
import { useEffect, useState } from "react";
import { apiClient } from "./lib/api-client";
import { GET_USER_INFO } from "./utils/constants";

function App() {
  const { userInfo, setUserInfo } = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      console.log("getUserData called");
      try {
        const response = await apiClient.get(GET_USER_INFO, {
          withCredentials: true,
        });
        console.log("getUserData response", response);
        if (response.status === 200 && response.data.id) {
          setUserInfo(response.data);
          console.log("setUserInfo called", response.data);
        } else {
          setUserInfo(undefined);
          console.log("setUserInfo called with undefined");
        }
      } catch (error) {
        console.error("getUserData error", error);
        setUserInfo(undefined);
      } finally {
        setLoading(false);
        console.log("getUserData finished");
      }
    };
    if (!userInfo) {
      getUserData();
    } else {
      setLoading(false);
      console.log("getUserData skipped");
    }
  }, [userInfo, setUserInfo]);


  // eslint-disable-next-line react/prop-types
  const PrivateRoute = ({ children }) => {
    const { userInfo } = useAppStore();
    const isAuthenticated = !!userInfo;
    console.log("i ran private")
    return isAuthenticated ? children : <Navigate to="/auth" />;
  };

  // eslint-disable-next-line react/prop-types
  const AuthRoute = ({ children }) => {
    const { userInfo } = useAppStore();
    console.log("i ran auth")
    const isAuthenticated = !!userInfo;
    return isAuthenticated ? <Navigate to="/auth" /> : children;
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={
              <AuthRoute>
                <Auth />
              </AuthRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
