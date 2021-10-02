import React, { useEffect, useState } from "react";

function Clock(props) {
  const [currentDate, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => tick(), 1000);
    return function clear() {
      clearInterval(timer);
    };
  });

  function tick() {
    setDate(new Date());
  }
  return (
    <div className="clock">
      {currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </div>
  );
}

export default Clock;
