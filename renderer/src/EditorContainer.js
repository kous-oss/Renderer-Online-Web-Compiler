import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");
require("codemirror/mode/jsx/jsx");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");

const EditorContainer = ({ displayName, value, language, onChange }) => {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-header">{displayName}</div>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineNumbers: true,
          lint: true,
          mode: { language },
          theme: "material"
        }}
      />
    </div>
  );
};

export default EditorContainer;
