"use client";
import React, { useState } from "react";
import { useBox } from "@/components/authContext";
import { useRouter } from "next/navigation";

export default function page() {
  const { login, logout, isAuth } = useBox();
  const router = useRouter();

  const [email, SetEmail] = useState("");
  const emailHandler = (e) => {
    SetEmail(e.target.value);
  };
  const [password, SetPassword] = useState("");
  const passwordHandler = (e) => {
    SetPassword(e.target.value);
  };

  const submitButton = () => {
    if (!password || !email) {
      return;
    }
    console.log("Email", email);
    console.log("Password", password);

    SetEmail("");
    SetPassword("");
    login();
    router.push("/dashboard");
  };
  return (
    <div>
      <div className="p-4">
        <span className="pr-2">Email:</span>
        <input
          type="email"
          value={email}
          onChange={emailHandler}
          className="bg-blue-500"
        />
      </div>
      <div className="p-4">
        <span className="pr-2">Password:</span>
        <input
          value={password}
          onChange={passwordHandler}
          className="bg-blue-500"
          type="text"
        />
      </div>
      <button onClick={submitButton} className="bg-green-600 p-1 ml-4 mt-4">
        Submit
      </button>
    </div>
  );
}
