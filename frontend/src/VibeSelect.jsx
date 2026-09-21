import React, { useState } from "react";
import { FaSmile, FaLeaf, FaHeart, FaSnowflake, FaStar, FaBolt } from "react-icons/fa";

function VibeSelect() {
  const [selectedVibe, setSelectedVibe] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div style={{ backgroundColor:"var(--cream)", padding:"40px" }}>
      <h1 style={{ fontFamily:"var(--font-headline)", color:"var(--ink)", fontSize:"42px", marginBottom:"20px" }}>
        You bring the photos. <br /> VYBE finds the vibe ✨
      </h1>
      <p style={{ fontFamily:"var(--font-body)", color:"var(--soft-ink)", marginBottom:"30px" }}>
        Tell us the mood you’re going for, and we’ll turn your real photos into a post that actually looks intentional.
      </p>

      <h3 style={{ fontFamily:"var(--font-body)", marginBottom:"10px" }}>Pick a vibe 🌈</h3>
      <div style={{ marginBottom:"20px" }}>
        {[
          {label:"Cute", icon:<FaSmile />},
          {label:"Natural", icon:<FaLeaf />},
          {label:"Confident", icon:<FaStar />},
          {label:"Romantic", icon:<FaHeart />},
          {label:"Cool", icon:<FaSnowflake />},
          {label:"Bold", icon:<FaBolt />}
        ].map(v => (
          <button key={v.label}
            style={{
              backgroundColor:selectedVibe===v.label ? "var(--deep-terracotta)" : "var(--terracotta)",
              borderRadius:"var(--radius-pill)",
              color:"white",
              padding:"10px 20px",
              margin:"5px",
              border:"none",
              cursor:"pointer",
              display:"inline-flex",
              alignItems:"center",
              gap:"8px"
            }}
            onClick={() => setSelectedVibe(v.label)}
          >
            {v.icon} {v.label}
          </button>
        ))}
      </div>

      <h3 style={{ fontFamily:"var(--font-body)", marginBottom:"10px" }}>Who’s in it 👥</h3>
      <div style={{ marginBottom:"30px" }}>
        {["Solo","Friends","Couple","Group"].map(tag => (
          <button key={tag}
            style={{
              backgroundColor:selectedGroup===tag ? "var(--lavender)" : "var(--gold)",
              borderRadius:"var(--radius-pill)",
              color:"var(--ink)",
              padding:"10px 20px",
              margin:"5px",
              border:"none",
              cursor:"pointer"
            }}
            onClick={() => setSelectedGroup(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <button style={{
        backgroundColor:"var(--deep-terracotta)",
        borderRadius:"var(--radius-pill)",
        color:"white",
        padding:"12px 24px",
        border:"none",
        cursor:"pointer",
        marginRight:"10px"
      }}>
        Start my VYBE 🚀
      </button>

      <button style={{
        backgroundColor:"var(--lavender)",
        borderRadius:"var(--radius-pill)",
        color:"var(--ink)",
        padding:"12px 24px",
        border:"none",
        cursor:"pointer"
      }}>
        Describe it myself ✍️
      </button>
    </div>
  );
}

export default VibeSelect;
