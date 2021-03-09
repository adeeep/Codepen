import { useEffect, useState } from "react";
import Editor from "./Editor";
import "./styles.css";
import "./index.css";

function App() {
  const [Html, SetHtml] = useState("");
  const [Js, SetJs] = useState("");
  const [css, Setcss] = useState("");
  const [srcDoc, SetsrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      SetsrcDoc(`
      <html>
       <body>${Html}</body>
       <style>${css}</style>
       <style>${Js}</style>
       </html>
    `);
      return () => clearTimeout(timeout);
    }, 250);
  }, [Html, css, Js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          dispalyName="HTML"
          value={Html}
          onchange={SetHtml}
        />
        <Editor
          language="css"
          dispalyName="CSS"
          value={css}
          onchange={Setcss}
        />
        <Editor
          language="javascript"
          dispalyName="HTML"
          value={Js}
          onchange={SetJs}
        />
      </div>
      <div classname="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
