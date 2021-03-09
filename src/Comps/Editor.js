import "./styles.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor(props) {
  const { language, displayName, value, onchange } = props;
  function Handlechange(editor, data, value) {
    onchange(value);
  }

  const [Open, setOpen] = useState(true);
  return (
    <div className={`editor-container ${Open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={Handlechange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          linewrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          linenumbers: true
        }}
      />
    </div>
  );
}

export default Editor;
