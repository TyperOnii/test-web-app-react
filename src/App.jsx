import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export default function App() {
  useEffect(() => tg.ready(), []);
  const close = () => {
    tg.ready();
  };
  return (
    <div>
      <h1>Telegram App</h1>
      <button onClick={close}>Close</button>
    </div>
  );
}
