import React from "react";

export default function ShareCard({ text }) {
  return (
    <div
      style={{
        width: 420,
        height: 420,
        borderRadius: 32,
        padding: "30px 26px",
        fontFamily: "Inter, sans-serif",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",

        /* 🔥 PREMIUM BACKGROUND */
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,0,150,0.15), transparent),
          radial-gradient(circle at 80% 80%, rgba(0,200,255,0.15), transparent),
          #020617
        `,

        /* 💎 DEPTH */
        boxShadow: "0 25px 80px rgba(0,0,0,0.7)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >

      {/* 🔥 TOP LIGHT GLOW */}
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          background:
            "radial-gradient(circle, rgba(255,0,150,0.25), transparent)",
          top: -60,
          left: -60,
          filter: "blur(70px)",
        }}
      />

      {/* 🔥 BOTTOM LIGHT GLOW */}
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          background:
            "radial-gradient(circle, rgba(0,200,255,0.25), transparent)",
          bottom: -60,
          right: -60,
          filter: "blur(70px)",
        }}
      />

      {/* 🔥 TITLE */}
      <div
        style={{
          fontSize: 14,
          opacity: 0.6,
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        🔥 ROAST ME
      </div>

      {/* 💀 MAIN TEXT */}
      <div
        style={{
          fontSize: 24,
          fontWeight: 600,
          lineHeight: 1.4,
          textAlign: "center",
          padding: "0 12px",
          letterSpacing: "0.3px",
        }}
      >
        {text}
      </div>

      {/* 👇 BOTTOM BRANDING */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        {/* <p
          style={{
            fontSize: 13,
            opacity: 0.4,
            marginBottom: 6,
          }}
        >
          roastmee
        </p> */}

        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            background: "linear-gradient(90deg,#22c55e,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.5px",
          }}
        >
          roastmee.onrender.com
        </p>
      </div>
    </div>
  );
}
