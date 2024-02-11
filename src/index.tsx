import * as React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return <div>Hello, world!</div>;
};

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
