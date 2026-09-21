import React, { useState } from "react";

function YourBoard() {
  const slides = ["Cover","Slide 2","Slide 3","Slide 4"];
  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <div style={{ backgroundColor:"var(--deep-cream)", padding:"40px" }}>
      <h2 style={{ fontFamily:"var(--font-headline)", color:"var(--ink)", fontSize:"32px", marginBottom:"20px" }}>
        Your VYBE Board 📋
      </h2>

      <div style={{ marginBottom:"20px" }}>
        <button style={{ margin:"5px" }}>Instagram 📱</button>
        <button style={{ margin:"5px" }}>Story 🎬</button>
        <button style={{ margin:"5px" }}>Pinterest 📌</button>
      </div>

      <div style={{ display:"flex", gap:"10px", marginBottom:"20px" }}>
        {slides.map(label => (
          <div key={label}
            style={{
              backgroundColor:selectedSlide===label ? "var(--lavender)" : "white",
              borderRadius:"var(--radius-card)",
              padding:"20px",
              boxShadow:"0 2px 6px rgba(0,0,0,0.1)",
              cursor:"pointer",
              flex:"1"
            }}
            onClick={() => setSelectedSlide(label)}
          >
            {label} 🖼️
          </div>
        ))}
      </div>

      <div style={{ marginBottom:"20px" }}>
        <button style={{ margin:"5px" }}>Swap photo 🔄</button>
        <button style={{ margin:"5px" }}>Change vibe 🎨</button>
        <button style={{ margin:"5px" }}>Export 📤</button>
      </div>

      <h3 style={{ fontFamily:"var(--font-headline)", color:"var(--ink)" }}>Smart Photo Rescue 🪄</h3>
      <p style={{ fontFamily:"var(--font-body)", color:"var(--soft-ink)" }}>
        This photo works. We'll fix the framing. Cloudinary's content-aware cropping preserves the subject while adapting to every format automatically.
      </p>
      <div style={{ display:"flex", gap:"20px", alignItems:"center" }}>
        <div style={{ backgroundColor:"white", padding:"20px", borderRadius:"var(--radius-card)" }}>ORIGINAL 🖼️</div>
        <span>➡️</span>
        <div style={{ backgroundColor:"white", padding:"20px", borderRadius:"var(--radius-card)" }}>INSTAGRAM 4:5 🖼️</div>
      </div>
    </div>
  );
}

export default YourBoard;
