import type { CSSProperties } from "react";

export default function NumberSelect({
  onPick,
}: {
  onPick: (num: number) => void;
}) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div style={wrapperStyle}>
      <h1 style={titleStyle}>✨ Pick a Magical Number ✨</h1>

      <div style={gridStyle}>
        {numbers.map((n) => (
          <button
            key={n}
            style={buttonStyle}
            className="magic-number"
            onClick={() => onPick(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <style>
        {`
          .magic-number {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            animation: popIn 0.6s ease;
          }

          .magic-number:hover {
            transform: scale(1.15) rotate(5deg);
            box-shadow: 0 0 25px rgba(255, 182, 193, 0.8);
          }

          @keyframes popIn {
            0%   { transform: scale(0.3); opacity: 0; }
            80%  { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); }
          }

          /* Mobile friendly */
          @media (max-width: 480px) {
            .magic-number {
              width: 55px !important;
              height: 55px !important;
              font-size: 20px !important;
            }
            h3 {
              font-size: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const wrapperStyle: CSSProperties = {
  textAlign: "center",
  marginTop: "30px",
};

const titleStyle: CSSProperties = {
  color: "#ff33cc",
  fontWeight: "bold",
  fontSize: "28px",
  marginBottom: "20px",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 70px)",
  gap: "15px",
  justifyContent: "center",
};

const buttonStyle: CSSProperties = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  border: "4px solid white",
  background:
    "linear-gradient(135deg, #ffc099, #ffccff, #cc99ff, #99ccff, #99ffcc)",
  backgroundSize: "300% 300%",
  color: "white",
  fontWeight: "bold",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(255, 182, 193, 0.6)",
};
