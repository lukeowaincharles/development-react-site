import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function DarkModeSwitch() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    // Add a listener to update the styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

    // On load set the mode
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove the listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const onSelectMode = (mode) => {
    setMode(mode);
    const browserWindow = Array.from(
      document.getElementsByClassName("browser-window")
    );
    if (mode === "light") {
      document.body.classList.add("light");
      browserWindow.forEach((item) => {
        item.classList.remove("dark");
        item.classList.add("light");
      });
    } else {
      document.body.classList.remove("light");
      browserWindow.forEach((item) => {
        item.classList.remove("light");
        item.classList.add("dark");
      });
    }
  };

  return (
    <>
      {mode === "dark" ? (
        <Button onClick={() => onSelectMode("light")}></Button>
      ) : (
        <Button onClick={() => onSelectMode("dark")}></Button>
      )}
    </>
  );
}

export default DarkModeSwitch;
