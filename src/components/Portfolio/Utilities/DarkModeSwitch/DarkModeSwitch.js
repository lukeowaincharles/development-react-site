import React from "react";
import { Button } from "react-bootstrap";

function DarkModeSwitch({mode, onSelectMode}) {

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
