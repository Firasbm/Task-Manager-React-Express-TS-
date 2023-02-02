import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [message, setMessage] = useState<string>();
  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.text())
      .then((message) => {
        console.log(message);
        setMessage(message);
      });
  }, []);
  return <div className="message">{message ?? "loading..."}</div>;
};

export default App;
