import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function PoseStudio() {
  const poses = [
    {name:"The Walk", meta:"Full-body · Confident · Solo"},
    {name:"The Lean", meta:"Half-body · Relaxed · Solo"},
    {name:"Side Profile", meta:"Portrait · Candid · Solo"}
  ];
  const [selectedPose, setSelectedPose] = useState(null);

  return (
    <div style={{ backgroundColor:"var(--cream)", padding:"40px" }}>
      <h2 style={{ fontFamily:"var(--font-headline)", color:"var(--ink)", fontSize:"32px", marginBottom:"20px" }}>
        Poses picked for your vibe 🌟
      </h2>
      <div style={{ display:"flex", gap:"20px" }}>
        {poses.map(pose => (
          <div key={pose.name}
            style={{
              backgroundColor:selectedPose===pose.name ? "var(--lavender)" : "white",
              borderRadius:"var(--radius-card)",
              padding:"20px",
              boxShadow:"0 2px 6px rgba(0,0,0,0.1)",
              cursor:"pointer",
              flex:"1"
            }}
            onClick={() => setSelectedPose(pose.name)}
          >
            <div style={{ backgroundColor:"var(--deep-cream)", height:"120px", marginBottom:"10px", display:"flex", alignItems:"center", justifyContent:"center" }}>🖼️</div>
            <h3 style={{ fontFamily:"var(--font-body)" }}>{pose.name}</h3>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--soft-ink)" }}>{pose.meta}</p>
            <button style={{
              backgroundColor:"var(--gold)",
              borderRadius:"var(--radius-pill)",
              padding:"8px 16px",
              border:"none",
              marginTop:"10px"
            }}>View instructions 📖</button>
          </div>
        ))}
      </div>
      <button style={{
        backgroundColor:"var(--deep-terracotta)",
        borderRadius:"var(--radius-pill)",
        color:"white",
        padding:"12px 24px",
        border:"none",
        cursor:"pointer",
        marginTop:"30px"
      }}>
        Build my board 🛠️
      </button>
    </div>
  );
}

export default PoseStudio;
