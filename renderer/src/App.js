import "./App.css";
import EditorContainer from "./EditorContainer";
import { useEffect, useState } from "react";

export default function App() {
  const [html, sethtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJS] = useState("");

  const [srcCode, setSrcCode] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSrcCode(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [html, css, js]);

  const handleHtml = (data) => {
    sethtml(data);
  };

  return (
    <div className="App">
      <div className="top-pane">
        <EditorContainer
          language="xml"
          displayName="HTML"
          value={html}
          onChange={handleHtml}
        />
        <EditorContainer
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <EditorContainer
          language="js"
          displayName="JS"
          value={js}
          onChange={setJS}
        />
      </div>

      <div className="bottom-pane">
        <iframe
          title="output"
          srcDoc={srcCode}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
