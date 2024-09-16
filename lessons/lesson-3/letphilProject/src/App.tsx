import * as React from "react";

const { useEffect } = React;
export default function App() {
  const makeRequest = async () => {
    const res = await fetch("https://randomuser.me/api?results=10");
    const json = await res.json();
    console.log(json);
  };

  useEffect(() => {
    makeRequest();
  });

  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
}
