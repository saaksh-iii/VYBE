import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa";

function YourBoard() {
  const slides = ["Cover","Slide 2","Slide 3","Slide 4","Closing"];
  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <div style={{ backgroundColor:"var(--deep-cream)", padding:"30px", borderRadius:"var(--radius-card)" }}>
      <h2 style={{ fontFamily:"var(--font-handwriting)", color:"var(--ink)" }}>
        <FaClipboardList style={{marginRight:"8px"}} /> Your Board
      </h2>

      <div style={{ display:"flex", gap:"10px", marginBottom:"15px" }}>
        {slides.map(label => (
          <div key={label} style={{
            backgroundColor:selectedSlide===label ? "var(--lavender)" : "white",
            borderRadius:"var(--radius-card)",
            padding:"20px",
            boxShadow:"0 2px 6px rgba(0,0,0,0.1)",
            cursor:"pointer"
          }}
          onClick={() => setSelectedSlide(label)}>
            {label}
          </div>
        ))}
      </div>

      {selectedSlide && <p style={{ fontFamily:"var(--font-handwriting)" }}>You selected: {selectedSlide}</p>}
    </div>
  );
}

export default YourBoard;
