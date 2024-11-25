import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "../Styles/EditablePage.css";

const EditablePage = () => {
  const [text, setText] = useState("");
  const [format, setFormat] = useState({ bold: false, italic: false, underline: false });

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const toggleFormat = (type) => {
    setFormat({ ...format, [type]: !format[type] });
  };

  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("editable-page.pdf");
  };

  return (
    <div className="editable-page">
      <h1>Editable Page</h1>
      <div className="toolbar">
        <button
          className={format.bold ? "active" : ""}
          onClick={() => toggleFormat("bold")}
        >
          B
        </button>
        <button
          className={format.italic ? "active" : ""}
          onClick={() => toggleFormat("italic")}
        >
          I
        </button>
        <button
          className={format.underline ? "active" : ""}
          onClick={() => toggleFormat("underline")}
        >
          U
        </button>
      </div>
      <textarea
        className={`${format.bold ? "bold" : ""} ${format.italic ? "italic" : ""} ${
          format.underline ? "underline" : ""
        }`}
        value={text}
        onChange={handleTextChange}
        placeholder="Start typing here..."
      ></textarea>
      <button className="download-btn" onClick={downloadAsPDF}>
        Download as PDF
      </button>
    </div>
  );
};

export default EditablePage;
