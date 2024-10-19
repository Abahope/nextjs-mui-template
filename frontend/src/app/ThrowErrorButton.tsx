"use client";
import { Button } from "@mui/material";
import { useErrorBoundary } from "react-error-boundary";

export default function ThrowErrorButton() {
  const { showBoundary } = useErrorBoundary();
  const throwError = () => {
    try {
      throw new Error("This is a test error");
    } catch (error) {
      showBoundary(error);
    }
  };

  return (
    <Button variant="contained" onClick={throwError}>
      Click me to throw an error
    </Button>
  );
}
