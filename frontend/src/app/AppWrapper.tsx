"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppWrapper({
  errorFallback,
  children,
}: {
  errorFallback: React.ReactElement;
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastContainer />
      <ErrorBoundary fallback={errorFallback}>{children}</ErrorBoundary>
    </>
  );
}
