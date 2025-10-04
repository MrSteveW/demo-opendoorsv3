import React from "react";
import AdminDashboard from "./components/AdminDashboard";
import Calendar from "./components/Calendar";
import { useUserRole } from "./components/useUserRole";
import "./App.css";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

export default function App() {
  const { isAdmin, isEditor, role } = useUserRole();

  return (
    <>
      <SignedOut>
        <div
          className="signin-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            gap: "2rem",
          }}
        >
          <h1 style={{ color: "#020265", fontSize: "3rem" }}>
            Demo booking app
          </h1>
          <p style={{ color: "#666", fontSize: "1.2rem" }}>
            Username: zyx password: abc
          </p>
          <SignInButton mode="modal" />
        </div>
      </SignedOut>
      <SignedIn>
        <div>{isAdmin ? <AdminDashboard /> : <Calendar />}</div>
      </SignedIn>
    </>
  );
}
