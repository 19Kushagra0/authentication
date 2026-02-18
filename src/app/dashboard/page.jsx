"use client";
import React, { useEffect } from "react";
import { useBox } from "@/components/authContext";
import { useRouter } from "next/navigation";

export default function page() {
  const { isAuth } = useBox();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth]);

  if (!isAuth) {
    return null;
  }

  return <div>Dashboard</div>;
}
